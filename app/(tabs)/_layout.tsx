// app/(tabs)/_layout.tsx
import React from 'react';
import { Tabs } from 'expo-router';

import { COLORS } from '@/constants';
import { useColorScheme } from '@/hooks';
import { TabBarIcon } from '@/components/ui';

export default function TabLayout() {
  const colorScheme = useColorScheme() ?? 'light';

  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        // Let’s style the tab bar to match the dark theme
        tabBarStyle: {
          backgroundColor: COLORS[colorScheme].background, // e.g. #23263B
          borderTopColor: 'transparent',
          paddingTop: 8,
        },
        // Make the active icon color your tint
        tabBarActiveTintColor: COLORS[colorScheme].tint,
        tabBarInactiveTintColor: '#999', // or something subtle
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="shopping-bag" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="community"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="users" color={color} />,
        }}
      />
      <Tabs.Screen
        name="chat"
        options={{
          title: '',
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="comments" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="safety"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="shield" color={color} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tabs>
  );
}
