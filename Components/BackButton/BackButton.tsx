import { TouchableOpacity, View, Image, Pressable } from "react-native";
import styles from "./Styles";

function BackButton ({action}:any) {

    return(
        <View>
            <TouchableOpacity onPress={action}> 
                <Image source={require('../../assets/arrow.png')} style={styles.arrowButton}/>
            </TouchableOpacity>
        </View>
    );
}

export default BackButton;