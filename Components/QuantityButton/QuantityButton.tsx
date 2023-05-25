import { useState } from "react";
import { TouchableOpacity, View, Text } from "react-native";
import styles from "./Styles";


export const QuantityButton = (): JSX.Element => {
    const [number, setNumber] = useState(1);

    const decreaseNumber = () => {
        if (number > 1) {
        setNumber(number - 1);
        }
    };

    const increaseNumber = () => {
        setNumber(number + 1);
    };

    return (
        <View style={styles.quantityContainer}>
            <View style={styles.quantityButton}>
                <TouchableOpacity onPress={decreaseNumber}>
                    <Text style={styles.qtButtonText}>-</Text>
                </TouchableOpacity>
            </View>
            <Text style={styles.quantityText}>{number}</Text>
            <View style={styles.quantityButton}>
                <TouchableOpacity onPress={increaseNumber}>
                  <Text style={styles.qtButtonText}>+</Text>
            </TouchableOpacity>
            </View>
        </View>
    );
};