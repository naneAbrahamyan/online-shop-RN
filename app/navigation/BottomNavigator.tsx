import * as React  from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import ProductsNavigator from './ProductsNavigator';
import { Cart, Settings } from '../screens/Screens';


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
        <Tab.Screen name="Cart" component={Cart} options = {{  tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name = "cart" size = {size} color = {color}/>
        )}}/>
        <Tab.Screen name="Settings" component={Settings} options = {{  tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name = "account-settings" size = {size} color = {color}/>
        )}}/>
        </Tab.Navigator>
);

export default BottomNavigator;