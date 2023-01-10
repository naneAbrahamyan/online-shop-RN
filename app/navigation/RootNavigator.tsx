import React from "react";
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomNavigator from "./BottomNavigator";
import LoginScreen from '../screens/LoginScreen';
import { NavigationContainer } from "@react-navigation/native";

export type RootParamList = {
  Login: (logged: boolean) => void;
  Bottom: undefined
};
const Stack = createNativeStackNavigator<RootParamList>();
const RootNavigator = () => {

  return(
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen
        name="Login" 
        component={LoginScreen} 
        options={{
            headerShown: false, 
          }}/>
        <Stack.Screen 
        name="Bottom" 
        component={BottomNavigator}
        options={{
          headerShown: false, 
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
