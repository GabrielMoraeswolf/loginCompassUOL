import { ScrollView, View, Text } from "react-native";
import styles from "./Styles";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

function CartScreen() {
    return(
        <ScrollView style ={styles.container}>
            <View style ={styles.textContainer}>
               <Text style ={styles.totalText}>TOTAL</Text>
               <View style ={styles.priceContainer}>
                    <Text style ={styles.priceText}>R$</Text>
                    <Text style ={styles.priceText}>0.00</Text>
               </View>
            </View>
            <View>
                {/* ESPAÇO PARA O CARD */}
                <View style={styles.line} />
            </View>
            <View style ={styles.buttonContainer}>
                <PrimaryButton>BUY</PrimaryButton>
            </View>
        </ScrollView>
    );
}

export default CartScreen;