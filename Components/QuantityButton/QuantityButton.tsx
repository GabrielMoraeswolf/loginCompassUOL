import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./Styles";

type QuantityButtonProps = {
    quantity: number;
    onQuantityChange: (newQuantity: number) => void;
  };

  export const QuantityButton = ({quantity, onQuantityChange}: QuantityButtonProps): JSX.Element => {
    const decreaseNumber = () => {
        if (quantity > 1) {
          onQuantityChange(quantity - 1);
        }
      };
    
    const increaseNumber = () => {
        onQuantityChange(quantity + 1);
    };

    return (
        <View style={styles.quantityContainer}>
            <View style={styles.quantityButton}>
                <TouchableOpacity onPress={decreaseNumber}>
                    <Text style={styles.qtButtonText}>-</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.quantityText}>{quantity}</Text>
            <View style={styles.quantityButton}>
                <TouchableOpacity onPress={increaseNumber}>
                  <Text style={styles.qtButtonText}>+</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};