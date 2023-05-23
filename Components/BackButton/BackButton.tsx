import { TouchableOpacity, View, Image } from "react-native";
import styles from "./Styles";
import { NavProps } from "../../types/navigation";

function BackButton ({onPress}:any) {
    return(
        <TouchableOpacity onPress={onPress}>
            <Image source={require('../../assets/arrow.png')} style={styles.arrowButton}/>
        </TouchableOpacity>
    );
}

export default BackButton;