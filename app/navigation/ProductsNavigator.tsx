import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { Items, ShopScreen } from "../screens/Screens";
import { Products } from "../components/ProductsList";

export type RootStackParamList = {
  ShopScreen: undefined;
  Items: Products
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const ProductsNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="ShopScreen" component={ShopScreen} options={{
        headerShown: false, 
      }}/>
    <Stack.Screen name="Items" component={Items} />
  </Stack.Navigator>
);

export default ProductsNavigator;
