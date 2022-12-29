import React, {ReactElement, useState, useContext} from 'react';
import { View, StyleSheet, ImageBackground, Text, Image, TextInput, FlatList, TouchableOpacity, Pressable} from 'react-native';
import Screen from '../components/Screen';
import colors from '../configs/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Context } from '../context/context';

const filterData = [ 
    {
        id:1,
        item: "Cabbage and Lettuce",
        clicked: false
    },
    {
        id:2,
        item: "Cucumbers and Tomatoes",
        clicked: false
    },
    {
        id:3,
        item: "Onions and Garlic",
        clicked: false
    },
    {
        id:4,
        item: "Peppers",
        clicked: false

    }, 
     {
        id:5,
        item: "Potatos and Carrots",
        clicked: false

    },

]

const products = [
    {
        id:1,
        name: "Boston Lettuce",
        price: 1.5,
        liked: false,
        weight: 150,
        type: 5,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
        uri: require("../assets/Media.png")
    },
    {
        id:2,
        name: "Boston Lettuce",
        price: 1.5,
        liked: false,
        weight: 150,
        type:1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
        uri: require("../assets/letucik.png")
    },
    {
        id:3,
        name: "Cabbage",
        price: 1.5,
        liked: false,
        weight: 150,
        type:1,
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a ",
        uri: require("../assets/img3.png")
    }
]


let prevFiltered = -1 ;

const ShopScreen = ({ navigation }) : ReactElement => {
    const { likedArray, setLikedArray } = useContext(Context);
    console.log(likedArray, 'liked')
    const [filteredData, setFilteredData] = useState(filterData);
    const [data, setData] = useState(products)
    const [search, setSearch] = useState("");
    const handleChange = (e: any) => {
        const val = products.filter(i => { //
           if(i.name.toLowerCase().includes(e.toLowerCase())){
            return i;
           }
        })
        setData(val);
      
        setSearch(e);
    }
    const handleFilterClick = (item: number) => {
        console.log(prevFiltered)
        const val = [...filteredData]
       
        if(prevFiltered >= 0){
            val[item-1].clicked =  !filteredData[item-1].clicked
            val[prevFiltered-1].clicked = false;
        }
        else{
            val[item-1].clicked =  !filteredData[item-1].clicked
        }
        prevFiltered = item;

        const filteredProducts = products.filter(i => i.type == item);
        if(!val[item-1].clicked){
            setData(products)
        }
        else{
            setData(filteredProducts)
        }
        setFilteredData(val);
    }

    const handleLike = (item: number) =>{
        const val = [...likedArray];
        val[item-1].liked = !likedArray[item-1].liked;
        setLikedArray(val)
        // setData(val)
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
                    data = {filteredData}
                    keyExtractor = {(item) => item.id.toString()}
                    renderItem = {({item}) => (
                        <TouchableOpacity onPress={() => {handleFilterClick(item.id)}}>
                            <Text style = {[styles.listItem, item.clicked ? styles.boxColor : styles.listItem]}>
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
                        <TouchableOpacity onPress={() => navigation.navigate('Items', item)}>
                            <View style={styles.productBox}>
                                <Image source={item.uri} />
                                <View>
                                    <Text style = {styles.h1}> {item.name }</Text>
                                    <Text style = {styles.h6}> ${item.price } /kg</Text>
                                    <View style = {{flexDirection:"row", alignSelf: "flex-end"}}>
                                    <TouchableOpacity style={styles.button} onPress = {() => handleLike(item.id)}>
                                    <MaterialCommunityIcons name = "heart" color= {likedArray[item.id-1].liked ? "green" : "black"} size = {20}/>
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
        color: colors.secondary,
        paddingHorizontal: 15,
        backgroundColor: "white",
        borderColor: "white",
        borderRadius:10,
        borderWidth:1,
        fontSize:14,
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
    boxColor: {
        backgroundColor: '#E2CBFF',
        color: "#6C0EE4"
    }
})

export default ShopScreen;