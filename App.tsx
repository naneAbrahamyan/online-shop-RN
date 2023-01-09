import * as React  from 'react';
import { useState, useCallback } from 'react'
import { StyleSheet, Text, View } from 'react-native';
import RoundIcon from './app/components/RoundIcon';
import colors from './app/configs/colors';
import LoginScreen from './app/screens/LoginScreen';
import Screen from './app/components/Screen';
import ShopScreen from './app/screens/ShopScreen';
import ItemScreen from './app/screens/ItemScreen';
import CartScreen from './app/screens/CartScreen';
import ProductsNavigator from './app/navigation/ProductsNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ContextProvider from './app/context/context';
import CartContextProvider from './app/context/CartContext';
import SettingsScreen from './app/screens/SettingsScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  const [logged, setLogged ] = useState(true);
  const handleLogin = useCallback((email:string, password: string) => {
    setLogged( (logged) => !logged);
  }, [])
  return (
  <CartContextProvider>

      <ContextProvider>
        
        <>   
          {logged ? 
        (   <LoginScreen handleLogin = {handleLogin}/> )
          :
        ( <NavigationContainer>

          <Tab.Navigator screenOptions={{
            headerShown: false, 
          }}>
            <Tab.Screen name="Products" component={ProductsNavigator} options = {{  tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name = "food" size = {size} color = {color}/>
            )}}/>
            <Tab.Screen name="Cart" component={CartScreen} options = {{  tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name = "cart" size = {size} color = {color}/>
            )}}/>
            <Tab.Screen name="Settings" component={SettingsScreen} options = {{  tabBarIcon: ({color, size}) => (
              <MaterialCommunityIcons name = "account-settings" size = {size} color = {color}/>
          )}}/>
          </Tab.Navigator>
        </NavigationContainer>)

        }
        
        </>
      </ContextProvider>
  </CartContextProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    alignItems:'center',
    backgroundColor:colors.purple,
    flex:1,
    justifyContent: 'center'
  },
});
