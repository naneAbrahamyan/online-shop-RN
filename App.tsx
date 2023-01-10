import * as React  from 'react';
import ContextProvider from './app/context/context';
import CartContextProvider from './app/context/CartContext';
import RootNavigator from './app/navigation/RootNavigator';

export default function App() {
 
  return (
  <CartContextProvider>
      <ContextProvider>
        <RootNavigator />  
      </ContextProvider>
  </CartContextProvider>
  )
}