import { Tabs } from 'expo-router';
import React, { useState } from 'react';
import { Text } from 'react-native';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useSession } from '../../ctx';
import SignIn from './sing-in';
import Register from './register';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const[register, setRegister]=useState(false);
  const { session, isLoading } = useSession();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  if (!session) {
    return (
      <>
        {
          register 
          ?
          <Register stateChanger={setRegister} />
          :
          <SignIn stateChanger={setRegister} />
        }
      </>
    )
  }

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Home',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="explore"
        options={{
          title: 'Explore',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'code-slash' : 'code-slash-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="list"
        options={{
          title: 'List',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'storefront' : 'storefront-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="form"
        options={{
          title: 'Contact',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'document-attach' : 'document-attach-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
