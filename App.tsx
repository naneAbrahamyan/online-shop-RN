import * as React  from 'react';
import { useState, useCallback } from 'react'
import LoginScreen from './app/screens/LoginScreen';
import CartScreen from './app/screens/CartScreen';
import ProductsNavigator from './app/navigation/ProductsNavigator';

import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ContextProvider from './app/context/context';
import CartContextProvider from './app/context/CartContext';
import SettingsScreen from './app/screens/SettingsScreen';

export type RootBottomTabParamList = {
  Products: undefined;
  Cart: undefined;
  Settings: undefined
};
const Tab = createBottomTabNavigator<RootBottomTabParamList>();

export default function App() {
  const [logged, setLogged ] = useState(true);
  const handleLogin = useCallback(() => {
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