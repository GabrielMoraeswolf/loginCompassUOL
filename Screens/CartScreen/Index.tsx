import { ScrollView, View, Text } from "react-native";
import styles from "./Styles";

function CartScreen() {
    return(
        <ScrollView style ={styles.container}>
            <View>
               <Text>TOTAL</Text>
               <View>
                    <Text>R$</Text>
               </View>
            </View>
        </ScrollView>
    );
}

export default CartScreen;