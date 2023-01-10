import * as React  from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ProductsNavigator from './ProductsNavigator';
import CartScreen from '../screens/CartScreen';
import SettingsScreen from '../screens/SettingsScreen';


export type BottomTabParamList = {
    Products: undefined;
    Cart: undefined;
    Settings: undefined,
    Login: undefined
  };


const Tab = createBottomTabNavigator<BottomTabParamList>();


const BottomNavigator = () => (
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
);

export default BottomNavigator;