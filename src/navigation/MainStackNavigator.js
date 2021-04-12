import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { SideMenu } from '../component/index';
import {
  SignUpScreen,
  LoginScreen,
  HomeScreen,
  HoroscopeScreen,
  NewsScreen,
  ProfileScreen
} from '../screens/index';

//Stack Navigation
const Stack = createStackNavigator()
const MainStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Horoscope" component={HoroscopeScreen} />
      <Stack.Screen name="News" component={NewsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="AppDrawer" component={DrawerNav} />
    </Stack.Navigator>
  )
}

//BottomTab Navigation
const Tab = createBottomTabNavigator();
const BottomTabsNav = () => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={MainStackNavigator} />
      <Tab.Screen name="Horoscope" component={HoroscopeScreen} />
      <Tab.Screen name="News" component={NewsScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

//Drawer Navigation
const Drawer = createDrawerNavigator();
const DrawerNav = () => {
  return (
    <Drawer.Navigator drawerContent={(props)=><SideMenu {...props}/>}>
      <Drawer.Screen name="Home" component={BottomTabsNav} />
      <Drawer.Screen name="Login" component={LoginScreen} />
    </Drawer.Navigator>
  );
}

export {
  MainStackNavigator,
  BottomTabsNav,
  DrawerNav
}