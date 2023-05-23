import { TouchableOpacity, View, Image } from "react-native";
import styles from "./Styles";
import { NavProps } from "../../types/navigation";
import Navigation from "../../Navigation/Navigation";

function CartButton ({onPress}: any): JSX.Element {
    {/* TO DO - ELIPSE */}
    return(
        <View>
            <TouchableOpacity onPress={onPress}> {/* PRESS -> NAVIGATION  */}
                <Image source={require('../../assets/cart-icon.png')} style={styles.arrowButton}/>
            </TouchableOpacity>
        </View>
    );
}

export default CartButton;