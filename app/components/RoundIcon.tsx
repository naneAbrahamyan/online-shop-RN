import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, StyleSheet } from 'react-native';

const RoundIcon = () => {
    return(
        <View style = {styles.roundBorder}>
            <MaterialCommunityIcons name='inbox' size = {60}/>
        </View>
    )
}

const styles = StyleSheet.create({
    roundBorder: {
      borderColor: 'white',
      borderWidth: 1,
      backgroundColor:'white',
      width: 100,
      height: 100,
      borderRadius: 50,
      justifyContent:'center',
      alignItems: 'center'
    },
  });

export default RoundIcon;