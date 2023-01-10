import React from 'react';
import { View, StyleSheet} from 'react-native';
import colors from '../configs/colors';
import Screen from '../components/Screen';
import RoundIcon from '../components/RoundIcon';
import LoginForm from '../components/LoginForm';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootParamList } from '../navigation/RootNavigator';

// interface LoginScreenProps{
//   handleLogin: (email:string, password: string) => void;
// }
type LoginScreenProps = NativeStackScreenProps<RootParamList, "Login">;

const LoginScreen = ({ navigation }: LoginScreenProps) => {
   return (
      <Screen>
         <View style={styles.container}>
            <View style={styles.firstContainer}> 
               <RoundIcon />
            </View>
            <View style={styles.loginform}> 
               <Screen>
                  <LoginForm handleLogin = {() => navigation.navigate('Bottom')}/>
               </Screen>
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
export default LoginScreen;