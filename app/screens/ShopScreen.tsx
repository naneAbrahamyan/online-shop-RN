import React, {ReactElement, useState} from 'react';
import { View, StyleSheet, ImageBackground, Text, Image, TextInput, FlatList, TouchableOpacity, Pressable} from 'react-native';
import Screen from '../components/Screen';
import colors from '../configs/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const filterData = [ 
    {
        id:1,
        item: "Cabbage and Lettuce",
    },
    {
        id:2,
        item: "Cucumbers and Tomatoes"
    },
    {
        id:3,
        item: "Onions and Garlic"
    },
    {
        id:4,
        item: "Peppers"
    }, 
     {
        id:5,
        item: "Potatos and Carrots"
    },

]

const products = [
    {
        id:1,
        name: "Boston Lettuce",
        price: 1.5,
        liked: false,
        weight: 150,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
        uri: require("../assets/Media.png")
    },
    {
        id:2,
        name: "Boston Lettuce",
        price: 1.5,
        liked: false,
        weight: 150,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
        uri: require("../assets/letucik.png")
    },
    {
        id:3,
        name: "Boston Lettuce",
        price: 1.5,
        liked: false,
        weight: 150,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
        uri: require("../assets/img3.png")
    }
]

const ShopScreen = ({navigation}) : ReactElement => {
    const [data, setData] = useState(products)
    const [search, setSearch] = useState("")
    const handleChange = (e: any) => {
        console.log(e)
        setSearch(e);
    }

    const handleLike = (item: number) =>{
        const val = [...data];
        val[item-1].liked = !data[item-1].liked;
        setData(val)
    }
    return(
    <Screen>
        <View style = {styles.container}>
            <View style = {styles.searchCont}>
                <Text style = {styles.headerText} > Vegetables </Text>
                <Image source={require("../assets/Vector.png")} style = {styles.bgImage} resizeMode = "contain"/>
            </View>
        
            <View style = {styles.filterCont}>
                    <TextInput 
                    style= {styles.searchInput}
                    placeholder="Search"
                    value = {search}
                    onChangeText={(e) => handleChange(e)}/>
                    <FlatList 
                    numColumns={3}
                    style = {styles.filterList}
                    data = {filterData}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => (
                        <TouchableOpacity onPress={() => {  console.log(item.item)  }}>
                            <Text style = {styles.listItem}>
                                {item.item}
                            </Text>
                        </TouchableOpacity>
                    )
                }
                    />
            </View>

            <View style = {styles.productsCont}>
                <FlatList 
                    data = {data}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => (
                        <TouchableOpacity onPress={() => navigation.navigate('Items', item, handleLike)}>
                            <View style={styles.productBox}>
                                <Image source={item.uri} />
                                <View>
                                    <Text style = {styles.h1}> {item.name }</Text>
                                    <Text style = {styles.h6}> ${item.price } /kg</Text>
                                    <View style = {{flexDirection:"row", alignSelf: "flex-end"}}>
                                    <TouchableOpacity style={styles.button} onPress = {() => handleLike(item.id)}>
                                    <MaterialCommunityIcons name = "heart" color= {item.liked ? "green" : "black"} size = {20}/>
                                    </TouchableOpacity>
                                    <TouchableOpacity style={styles.button1} onPress = {() => console.log('clicked')}>
                                    <MaterialCommunityIcons name = "cart" color= "white" size = {20}/>
                                    </TouchableOpacity>
                                    </View>
                                </View>
                            </View> 
                        </TouchableOpacity>
                    )}
                />
            </View>
        </View>
    </Screen>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background
    },
    bgImage:{
        alignSelf:'flex-start',
        paddingRight:50
    },
    searchCont: {
       flex:2,
       flexDirection: 'row',
       justifyContent:'space-around'
    },
    productsCont: {
      flex: 6
    },
    headerText: {
        color: colors.primary,
        fontSize: 30,
        fontWeight: 'bold',
        alignSelf:'center'
    },
    h1: {
        color: colors.primary,
        fontSize: 22,
        fontWeight:'bold'
    },
    h6: {
        color: colors.secondary,
        fontSize:18,
    },
    filterCont: {
      flex: 2
    },
    searchInput: {
        borderRadius:10,
        borderWidth: 1,
        borderColor: colors.secondary,
        fontWeight:'400',
        height:40,
        margin: 10
    },
    filterList: {
        flexDirection: "column",
        // flexWrap: "wrap"
        // flexDirection: "row",
        // flexWrap: "wrap"
    },
    listItem: {
        backgroundColor: colors.secondary,
        borderColor: "white",
        borderRadius:10,
        borderWidth:1,
        fontSize:18,
        margin:5,
        padding:3
    },
    productBox: {
        flexDirection: "row",
        justifyContent: "space-evenly",
        marginVertical: 5
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        marginTop: 15,
        margin:3,
        paddingHorizontal: 32,
        borderRadius: 10,
        elevation: 3,
        backgroundColor: "white",
        },
    button1: {
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

export default ShopScreen;