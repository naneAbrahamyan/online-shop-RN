import React, {ReactElement, useContext} from 'react';
import { View, StyleSheet, Text} from 'react-native';
import colors from '../configs/colors';
import Screen from '../components/Screen';
import { CartContext } from '../context/CartContext';
import ProductsList, { Products } from '../components/ProductsList';
import { products } from '../utils';
import { RootBottomTabParamList } from '../../App';
import type { BottomTabScreenProps } from '@react-navigation/bottom-tabs';


type CartScreenProps = BottomTabScreenProps<RootBottomTabParamList, "Cart">;

const CartScreen = ( { navigation }: CartScreenProps) : ReactElement => {
   const { cartItems } = useContext(CartContext);
   
   const arr = [];
   for(let i=0; i< cartItems.length; i++){
      if(cartItems[i].added){
         arr.push(products[cartItems[i].id -1])
      }
   }

   const handleClick = (item: Products ) => {
      navigation.navigate('Items', item)
   }
   return (
      <Screen>
         <View style={styles.container}>
            <View style = {styles.headerDiv}>
               <Text style = {styles.headerText}> Cart Items </Text>
            </View>
            <View style = {styles.cart}>
              {arr.length ? 
              <ProductsList products={arr} handleClick = {handleClick}/>  
            :
            <Text> Cart Is Empty</Text>} 
            </View>
         </View>
      </Screen>
    );
    }
const styles = StyleSheet.create({
     container: {
        backgroundColor: colors.background,
        flex:1,
        flexDirection: "column"
     },
     headerDiv: {
        backgroundColor:'white',
        flex:2,
        justifyContent: 'center',
        alignItems:'center'
     },
     cart: {
        flex:7,
        justifyContent:'center',
        alignItems: 'center'
     },
     headerText: {
      color: colors.primary,
      fontSize: 30,
      fontWeight: 'bold',
      alignSelf:'center'
  },
})
export default CartScreen;