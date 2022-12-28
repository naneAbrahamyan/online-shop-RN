import React, {ReactElement} from 'react';
import { View, StyleSheet, SafeAreaView} from 'react-native';
import colors from '../configs/colors';
import Screen from '../components/Screen';
import RoundIcon from '../components/RoundIcon';
import LoginForm from '../components/LoginForm';

const CartScreen = () : ReactElement => {
   return (
      <Screen>
         <View style={styles.container}>
            <View style={styles.firstContainer}> 
               <RoundIcon />
            </View>
         </View>
      </Screen>
    );
    }
const styles = StyleSheet.create({
     container: {
        backgroundColor:colors.purple,
        flex:1,
        flexDirection: "column"
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
export default CartScreen;