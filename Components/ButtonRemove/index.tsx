import React, { useContext } from 'react';
import { TouchableOpacity, View, Image, Text, StyleSheet } from 'react-native';
import styles from './Styles';

function ButtonRemove({ onPress }: any) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.container}>
        <Text style={styles.text}>-</Text> 
      </View>
    </TouchableOpacity>
  );
}

export default ButtonRemove;
