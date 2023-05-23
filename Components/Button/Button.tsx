import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";
import Styles from "../../Screens/HomeScreen/Styles";

interface Props {
    text: string;
    onPress: () => void;
  }
  
  export const MyButton = ({ text, onPress }: Props): JSX.Element => {
    return (
      <TouchableOpacity style={Styles.priceButton} onPress={onPress}>
        <Text style={Styles.textButton}>{text}</Text>
      </TouchableOpacity>
    );
  };
  
  