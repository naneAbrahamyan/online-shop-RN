import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ShopScreen from '../screens/ShopScreen';
import ItemScreen from '../screens/ItemScreen';

export type RootStackParamList = {
  ShopScreen: undefined;
  Items: {
    price:number,
    weight: number,
    name: string,
    id: number,
    uri: string,
    description: string
  };
};
const Stack = createNativeStackNavigator<RootStackParamList>();
const ProductsNavigator = () => (
  <Stack.Navigator >
    <Stack.Screen name="ShopScreen" component={ShopScreen} options={{
        headerShown: false, 
      }}/>
    <Stack.Screen name="Items" component={ItemScreen} />
  </Stack.Navigator>
);

export default ProductsNavigator;
