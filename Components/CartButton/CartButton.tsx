import React from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import styles from './Styles';

function CartButton({ onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <Image source={require('../../assets/cart-icon.png')} style={styles.cartButton} />
      <View style={styles.badge}>
      {/* DEIXAR DINAMICO APÓS TER O CARTSCREEN */}
        <Text style={styles.badgeText}>2</Text> 
      </View>
    </TouchableOpacity>
  );
}

export default CartButton;
