import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
        marginLeft: 20,
        backgroundColor: Colors.cardTitle,
        width: 320,
        height: 190,
        borderRadius: 5,
        borderWidth: 0.5,
        padding: 5,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, //ANDROID
    },
    textContainer: {
        marginTop: 12,
        marginLeft: 18,
    },
    cardTitle: {
        fontSize: 20,
        fontWeight: '600',
    },
    cardText: {
        fontSize: 16,
        fontWeight: '400',
        marginTop: 14,
    },
    okText: {
        fontSize: 20,
        fontWeight: '600',
    }, 
    okContainer: {
        marginTop: 65,
        marginLeft: 260,
    }
  });

  export default styles