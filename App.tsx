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
