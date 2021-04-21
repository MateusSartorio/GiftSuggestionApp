import 'react-native-gesture-handler';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Login from '../screens/Login';
import Home from '../screens/Home';

const Stack = createStackNavigator();

export default function Index() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: '#fff',
            },
            headerBackground: () => (
              <BlurView
                tint="dark"
                intensity={20}
                style={StyleSheet.absoluteFill}
              /> 
            ),
          }}
        />
        <Stack.Screen 
          name="Home" 
          component={Home}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: '#fff',
            },
            headerBackground: () => (
              <BlurView
                tint="dark"
                intensity={20}
                style={StyleSheet.absoluteFill}
              /> 
            ),
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
