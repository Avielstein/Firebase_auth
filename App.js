import React, { useCallback, useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import * as SplashScreen from 'expo-splash-screen';

import colors from './constants/colors';
import { AuthProvider } from './contexts/AuthContext';
import AppNavigator from './navigation/AppNavigator';

export default function App() {

  /*
  
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      
      console.log('starting app loading screen...');
      try {
        // Simulate fetching external resources by delaying for two seconds
        await new Promise(resolve => setTimeout(resolve, 2000));
      } catch (e) {
        console.warn('Failed to load external data:', e);
      } finally {
        setAppIsReady(true);
        console.log('ready!');
      }
      
      setAppIsReady(true);
    }

    SplashScreen.preventAutoHideAsync();
    prepare();
  }, []);

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }
  */

  

  return (
    <AuthProvider 
    //onLayout={onLayoutRootView}
    >
      <NavigationContainer >
        <AppNavigator />
      </NavigationContainer>
    </AuthProvider>
  );
}
