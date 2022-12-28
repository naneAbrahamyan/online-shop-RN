import React, {ReactElement} from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native';
import colors from '../configs/colors';
import Screen from '../components/Screen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Seperator from '../components/Seperator';


const ItemScreen = () : ReactElement => { 
    return(
        <Screen>
            <View style = {styles.container}>
                <View style={styles.imageCont}>
                    <Image source={require("../assets/img3.png")} style ={styles.image}/>
                </View>
                <View style = {styles.contentCont}>
                    <Text style = {styles.headerText}>Title </Text>
                    <Seperator />
                    <Text style = {styles.secondaryText}>price </Text>
                    <Seperator />
                    <Text style = {styles.greenText}>weight </Text>
                    <Seperator />
                    <Text style = {styles.h3}>Description </Text>
                    <Seperator />
                    <Text style = {styles.description}>Lorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem IspumLorem Ispum </Text>
                    <View style = {{flexDirection: 'row', alignSelf: "flex-end", marginTop: 150}}>
                    <TouchableOpacity style={styles.button} onPress = {() => console.log('clicked')}>
                        <MaterialCommunityIcons name = "heart" color= "grey" size = {20}/>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button1} onPress = {() => console.log('clicked')}>
                        <MaterialCommunityIcons name = "cart" color= "white" size = {20}/>
                        <Text style = {{color: 'white'}}> Add to Cart</Text>
                     </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Screen>
    )   
}

const styles = StyleSheet.create({
    container: {
        flex:1,
       
    },
    imageCont: {
        flex:1
    },
    contentCont: {
        flex:3,
        backgroundColor:'white',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        paddingVertical: 15,
        padding: 10
    },
    h3:{
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 25,
        marginTop: 5
    },
    headerText: {
        color: colors.primary,
        fontWeight: 'bold',
        fontSize: 40,
        marginTop: 5
    },
    description: {
        color: colors.secondary,
        fontSize: 18,
    },

    secondaryText: {
        color: colors.secondary,
        fontSize: 22
    },
    greenText: {
        color: colors.green,
        fontSize: 22
    },

    image: {
        width: '100%',
        height: undefined,
        aspectRatio: 1,    
    },
    button: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginTop: 15,
        margin:3,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: 'white',
        },
    button1: {
        flex:3,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginTop: 15,
        margin:3,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: colors.green,
        },
 
})
export default ItemScreen;