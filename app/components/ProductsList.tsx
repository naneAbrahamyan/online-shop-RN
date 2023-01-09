import React, {ReactElement, useContext} from 'react';
import { StyleSheet, Image,  View, FlatList, TouchableOpacity, Text, ImageSourcePropType } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../configs/colors';
import { CartContext } from '../context/CartContext';
import { Context } from '../context/context';
export interface Products {
  id:number,
  name: string,
  price: number,
  liked: boolean,
  weight: number,
  type:number,
  description: string,
  uri: string
}
interface ProductsListProps{
  products: Products[],
  handleClick: (value: Products) => void,
}
const ProductsList = ( { products, handleClick} : ProductsListProps): ReactElement => {
  const {likedArray, setLikedArray } = useContext(Context);
  const {cartItems, setCartItems} = useContext(CartContext);

  const handleLike = (item: number) =>{
    const val = [...likedArray];
    val[item-1].liked = !likedArray[item-1].liked;
    setLikedArray(val)
  }

  const handleCartClick = (item: number) => {
    const val = [...cartItems];
    val[item-1].added = !cartItems[item-1].added;
    setCartItems(val)
  }  
    return (
          <View style={styles.view}>
          <FlatList 
              data = {products}
              keyExtractor = {(item) => item.id.toString()}
              renderItem = {({item}) => (
                <TouchableOpacity onPress={() => handleClick(item)}>
                    <View style={styles.productBox}>
                        <Image source= {item.uri} />
                        <View>
                            <Text style = {styles.h1}> {item.name }</Text>
                            <Text style = {styles.h6}> ${item.price } /kg</Text>
                            <View style = {{flexDirection:"row", alignSelf: "flex-end"}}>
                            <TouchableOpacity style={styles.button} onPress = {() => handleLike(item.id)}>
                            <MaterialCommunityIcons name = "heart" color= {likedArray[item.id-1].liked ? "green" : "black"} size = {20}/>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.button1} onPress = {() => handleCartClick(item.id)}>
                            <MaterialCommunityIcons name = "cart" color= {cartItems[item.id-1].added ? "white" : "grey"}  size = {20}/>
                            </TouchableOpacity>
                            </View>
                        </View>
                    </View> 
                </TouchableOpacity>
            )}
              
          />
          </View>
      );
}



const styles = StyleSheet.create({
  view: {
    padding: 5,
    backgroundColor: "white"
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

export default ProductsList;
