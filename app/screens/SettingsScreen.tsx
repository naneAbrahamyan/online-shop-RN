import React, {ReactElement} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import colors from '../configs/colors';
import Screen from '../components/Screen';
import RoundIcon from '../components/RoundIcon';
import LoginForm from '../components/LoginForm';

const SettingsScreen = () : ReactElement => {
   return (
      <Screen>
         <View style={styles.container}>
           <Text> User Settings </Text>
         </View>
      </Screen>
    );
    }
const styles = StyleSheet.create({
     container: {
        backgroundColor:colors.background,
        flex:1,
        justifyContent:'center',
        alignItems: 'center'
     },
     loginform: {
        backgroundColor:'white',
        flex:4,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20
     },
     firstContainer : {
        backgroundColor: colors.purple,
        flex:2,
        justifyContent:'center',
        alignItems: 'center'
     }
})
export default SettingsScreen;