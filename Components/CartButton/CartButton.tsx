import React, { useContext } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import styles from './Styles';
import { CartContext } from '../Context/CartContext';

function CartButton({ onPress, cartCount }: any) {
  const cartCounter = useContext(CartContext);
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../assets/cart-icon.png')} style={styles.cartButton} />
      <View style={styles.badge}>
        <Text style={styles.badgeText}>{cartCounter.cards.length}</Text> 
      </View>
    </TouchableOpacity>
  );
}

export default CartButton;
