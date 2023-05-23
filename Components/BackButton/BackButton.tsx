import { TouchableOpacity, View, Image } from "react-native";
import styles from "./Styles";

function BackButton ({onPress}:any): JSX.Element {
    return(
        <View>
            <TouchableOpacity onPress={onPress}> {/* PRESS -> NAVIGATION  */}
                <Image source={require('../../assets/arrow.png')} style={styles.arrowButton}/>
            </TouchableOpacity>
        </View>
    );
}

export default BackButton;