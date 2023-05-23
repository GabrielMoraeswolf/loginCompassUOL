import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

const styles = StyleSheet.create({
    button: {
      backgroundColor: Colors.buttonBuy,
      width: 260,
      height: 55,
      borderRadius: 25,
      padding: 17,
      marginTop: 15,
    },
    buttonText: {
      color: Colors.white,
      textAlign: "center",
      justifyContent: 'center',
      fontSize: 16,
      textTransform: "uppercase",
    },
    pressed: {
      opacity: 0.7,
    },
    icon: {
      alignSelf: 'center',
      marginRight: 10,
    },
  });

  export default styles