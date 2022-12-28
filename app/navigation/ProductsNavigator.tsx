import React from "react";
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopScreen from '../screens/ShopScreen';
import ItemScreen from '../screens/ItemScreen';


const Stack = createNativeStackNavigator();
const ProductsNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Account" component={ShopScreen} />
    <Stack.Screen name="Items" component={ItemScreen} />
  </Stack.Navigator>
);

export default ProductsNavigator;
