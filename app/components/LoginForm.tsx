import * as React from 'react';
import { View, StyleSheet, Text, TextInput , Pressable } from 'react-native';
import colors from '../configs/colors';
import { Dimensions } from "react-native";
import * as Yup from 'yup';


import {Formik} from 'formik';

  const width = Dimensions.get('window').width; 
 
  const validationSchema = Yup.object().shape({
    email: Yup.string()
    .email('Please enter valid email')
    .required('Email is required')
    .label('Email'),
    password: Yup.string()
    .matches(/\w*[a-z]\w*/, 'Password must have a small letter')
    .matches(/\w*[A-Z]\w*/, 'Password must have a capital letter')
    .matches(/\d/, 'Password must have a number')
    .min(4, ({min}) => `Password must be at least ${min} characters`)
    .required('Password is required')
    .label('Password'),
    });


interface LoginFormProps{
    handleLogin: () => void;
  }
const LoginForm = ({handleLogin} : LoginFormProps) => {
    return (
        <View style = {styles.container}>
            <Text style = {styles.headerText}> Local Garden </Text>
            <Text style = {styles.text}> Because you desere to eat fresh </Text>
          <Formik
            initialValues={{email: "", password: ''}}
            validationSchema = {validationSchema}
            onSubmit={()=> handleLogin() }>
            {({
            handleChange,
            handleBlur,
            handleSubmit,
            values,
            errors,
            touched,
            }) => (
                <View style = {styles.input}>
                <TextInput
                    placeholder="Email"
                    onChangeText={handleChange('email')}
                    onBlur={handleBlur('email')}
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect={false}
                    keyboardType="email-address"
                    textContentType="emailAddress"
                    value={values.email}
                    style = {{margin: 5, borderRadius: 10, borderColor: colors.secondary, borderWidth: 1, padding:20}}
                />
                {errors.email && touched.email && (
                <Text style={{color: 'red'}}>{errors.email}</Text>
                )}

                <TextInput
                    placeholder="Password"
                    onChangeText={handleChange('password')}
                    onBlur={handleBlur('password')}
                    autoCapitalize="none"
                    secureTextEntry
                    textContentType="password"
                    value={values.password}
                    style = {{margin: 5,marginBottom: 5, borderRadius: 10, borderColor: colors.secondary, borderWidth: 1, padding:20}}

                />
                {errors.password && touched.password && (
                <Text style={{color: 'red'}}>{errors.password}</Text>
                )}
                <Pressable style={styles.button} onPress = {() => handleSubmit()}>
                    <Text> Submit </Text>
                </Pressable>

                </View>
             )}
        </Formik>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        marginTop:50,
        borderTopLeftRadius: 15,
        borderTopRightRadius: 15,
        textAlign: 'center',
        justifyContent:'center',
        alignItems: 'center'
    },
    headerText: {
        color: colors.primary,
        fontSize: 30,
        fontWeight: 'bold',
    },
    text: {
        marginVertical: 10,
        color: colors.secondary,
        fontSize: 18,
        fontWeight: 'normal'
    },
    input:{
        width: 2* width/3,
        height: 100,
        margin: 40
        },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginTop: 10,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: colors.green,
        },
})

export default LoginForm;