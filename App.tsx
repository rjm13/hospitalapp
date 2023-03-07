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

  const [isRootScreen, setIsRootScreen] = useState<boolean|null>(null);

  const [theme, setTheme] = useState<boolean>(false);

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
          setUserID: (val: {}) => setUserID(''),
          isRootScreen,
          setIsRootScreen: (val: boolean) => setIsRootScreen(val),
          deepLink,
          setDeepLink: (link: {}) => setDeepLink(link),
          theme,
          setTheme: (val: boolean) => setTheme(val),
        }}>
        <Navigation colorScheme={colorScheme} />
        </AppContext.Provider>
        <StatusBar style="dark" backgroundColor='transparent'/>
      </SafeAreaProvider>
    );
  }
}
