import React, { Component } from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer'
import { createStackNavigator } from '@react-navigation/stack'
import {
  NavigationContainer,
  DefaultTheme,
  DarkTheme,
} from '@react-navigation/native'
import { StatusBar } from 'react-native'
import SplashScreen from './src/SplashScreen'
import LoginScreen from './src/LoginScreen'
import HomeScreen from './src/HomeScreen'
import ItemListScreen from './src/ItemListScreen'
import ItemDetailsScreen from './src/ItemDetailsScreen'

const Drawer = createDrawerNavigator()
const Stack = createStackNavigator()

export default class App extends Component {
  createHomeStack = () => (
    <Stack.Navigator>
      <Stack.Screen
        name="Splash"
        component={SplashScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          title: '',
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="Drawer"
        children={this.createDrawer}
        options={{
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ItemList"
        component={ItemListScreen}
        options={{
          title: '',
          headerShown: true,
        }}
      />
      <Stack.Screen
        name="ItemDetails"
        component={ItemDetailsScreen}
        options={{
          title: '',
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );

  createDrawer = () => (
    <Drawer.Navigator
      drawerType="slide"
      initialRouteName="Home">
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );

  render() {
    return (
      <NavigationContainer>
        <StatusBar backgroundColor="#fff" barStyle="dark-content" />
        {this.createHomeStack()}
      </NavigationContainer>
    )
  }
}
