import { useFonts } from 'expo-font';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { TaskProvider } from '@/hooks/useTaskContext';
import 'react-native-reanimated';
import { LogLevel, OneSignal } from 'react-native-onesignal';
import Constants from 'expo-constants';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

SplashScreen.preventAutoHideAsync();

OneSignal.Debug.setLogLevel(LogLevel.Verbose);
// @ts-expect-error bla
OneSignal.initialize(Constants.expoConfig.extra.oneSignalAppId);

export default function RootLayout() {
  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  useEffect(() => {
    OneSignal.Notifications.requestPermission(true).then((status) => {
      console.log('OneSignal permission status:', status);
    });

    OneSignal.Notifications.addEventListener(
      'foregroundWillDisplay',
      (notificationReceivedEvent) => {
        const notification = notificationReceivedEvent.getNotification();
        console.log(
          'Foreground notification:',
          JSON.stringify(notification, null, 2),
        );
        notificationReceivedEvent.preventDefault();
        notificationReceivedEvent.notification.display();
      },
    );

    OneSignal.Notifications.addEventListener('click', (openedEvent) => {
      console.log('Notification opened:', JSON.stringify(openedEvent, null, 2));
    });

    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) return null;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea}>
        <TaskProvider>
          <Stack>
            <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
            <Stack.Screen name="+not-found" />
          </Stack>
          <StatusBar style="auto" />
        </TaskProvider>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
