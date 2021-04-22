import 'react-native-gesture-handler';
import { BlurView } from 'expo-blur';
import React from 'react';
import { StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

// importing screens
import Login from '../screens/Login';
import Home from '../screens/Home';
import GenerateGift from '../screens/GenerateGift';
import TopGifts from '../screens/TopGifts';
import RateApp from '../screens/RateApp';
import GenerateMessage from '../screens/GenerateMessage';

const Stack = createStackNavigator();

export default Index = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen
          name='Login'
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
          name='Home' 
          component={Home}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: '#fff',
            },
            headerBackground: () => (
              <BlurView
                tint='dark'
                intensity={20}
                style={StyleSheet.absoluteFill}
              /> 
            ),
          }}
        />
        <Stack.Screen 
          name='GenerateGift' 
          component={GenerateGift}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: '#fff',
            },
            headerBackground: () => (
              <BlurView
                tint='dark'
                intensity={20}
                style={StyleSheet.absoluteFill}
              /> 
            ),
          }}
        />
        <Stack.Screen 
          name='TopGifts' 
          component={TopGifts}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: '#fff',
            },
            headerBackground: () => (
              <BlurView
                tint='dark'
                intensity={20}
                style={StyleSheet.absoluteFill}
              /> 
            ),
          }}
        />
        <Stack.Screen 
          name='RateApp' 
          component={RateApp}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: '#fff',
            },
            headerBackground: () => (
              <BlurView
                tint='dark'
                intensity={20}
                style={StyleSheet.absoluteFill}
              /> 
            ),
          }}
        />
        <Stack.Screen 
          name='GenerateMessage' 
          component={GenerateMessage}
          options={{
            headerTransparent: true,
            headerTitleStyle: {
              color: '#fff',
            },
            headerBackground: () => (
              <BlurView
                tint='dark'
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
