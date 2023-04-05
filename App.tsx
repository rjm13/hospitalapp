import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Platform } from 'react-native';
import React, {useEffect, useState, useRef} from 'react';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';

import Amplify from '@aws-amplify/core';
import config from './src/aws-exports';
Amplify.configure(config);

import { AppContext } from './AppContext';

import * as Device from 'expo-device';
import * as Notifications from 'expo-notifications';

Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: false,
    shouldSetBadge: false,
  }),
});

async function registerForPushNotificationsAsync() {
  let token;
  if (Device.isDevice) {
    const { status: existingStatus } = await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== 'granted') {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== 'granted') {
      alert('Failed to get push token for push notification!');
      return;
    }
    token = (await Notifications.getExpoPushTokenAsync()).data;
    
  } else {
    alert('Must use physical device for Push Notifications');
  }

  if (Platform.OS === 'android') {
    Notifications.setNotificationChannelAsync('default', {
      name: 'default',
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: '#FF231F7C',
    });
  }
  console.log(token);
  return token;
}

export default function App() {

  const [userID, setUserID] = useState<string|null>(null);

  const [userFirstName, setUserFirstName] = useState<string|null>(null);

  const [userLastName, setUserLastName] = useState<string|null>(null);

  const [systemID, setSystemID] = useState<string|null>(null);

  const [hospID, setHospID] = useState<string|null>(null);

  const [departID, setDepartID] = useState<string|null>(null);

  const [userRoleID, setUserRoleID] = useState<string|null>(null);

  const [isRootScreen, setIsRootScreen] = useState<boolean|null>(null);

  const [theme, setTheme] = useState<boolean>(false);

  const [militaryTime, setMilitaryTime] = useState<boolean>(false);

  const [isManager, setIsManager] = useState<boolean>(false);

  const [deepLink, setDeepLink] = useState(null);

  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  const [expoPushToken, setExpoPushToken] = useState('');
  const [notification, setNotification] = useState(false);
  const notificationListener = useRef();
  const responseListener = useRef();

  useEffect(() => {
    registerForPushNotificationsAsync().then(token => setExpoPushToken(token));

    notificationListener.current = Notifications.addNotificationReceivedListener(notification => {
      setNotification(notification);
    });

    responseListener.current = Notifications.addNotificationResponseReceivedListener(response => {
      console.log(response);
    });

    return () => {
      Notifications.removeNotificationSubscription(notificationListener.current);
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  useEffect(() => {
    // console.log('token is')
    // console.log(expoPushToken)
  }, [expoPushToken])


  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppContext.Provider value={{
          userID,
          setUserID: (val: string | null) => setUserID(val),
          systemID,
          setSystemID: (val: string | null) => setSystemID(val),
          hospID,
          setHospID: (val: string | null) => setHospID(val),
          departID,
          setDepartID: (val: string | null) => setDepartID(val),
          userRoleID,
          setUserRoleID: (val: string | null) => setUserRoleID(val),
          isRootScreen,
          setIsRootScreen: (val: boolean) => setIsRootScreen(val),
          deepLink,
          setDeepLink: (link: {}) => setDeepLink(link),
          theme,
          setTheme: (val: boolean) => setTheme(val),
          isManager,
          setIsManager: (val: boolean) => setIsManager(val),
          militaryTime,
          setMilitaryTime: (val: boolean) => setMilitaryTime(val),
          userFirstName,
          setUserFirstName: (val: string | null) => setUserFirstName(val),
          userLastName,
          setUserLastName: (val: string | null) => setUserLastName(val),
        }}>
        <Navigation colorScheme={colorScheme} />
        </AppContext.Provider>
        <StatusBar style={theme === true ? 'light' : "dark"} backgroundColor='transparent'/>
      </SafeAreaProvider>
    );
  }
}
