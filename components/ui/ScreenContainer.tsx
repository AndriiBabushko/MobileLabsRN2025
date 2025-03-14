import React from 'react';
import { SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function ScreenContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: '#1D2133' }}>
      <StatusBar style="light" />

      {children}
    </SafeAreaView>
  );
}
