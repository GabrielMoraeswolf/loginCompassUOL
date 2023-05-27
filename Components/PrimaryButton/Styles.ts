import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
    },
    button: {
      backgroundColor: Colors.buttonBuy,
      width: 260,
      height: 55,
      borderRadius: 25,
      padding: 17,
      marginTop: 15,
      shadowColor: 'black',
      shadowOffset: {width: 1, height: 5},
      shadowOpacity: 0.20,
      shadowRadius: 4,
      elevation: 4, //ANDROID
    },
    buttonText: {
      color: 'white',
      textAlign: "center",
      justifyContent: 'center',
      fontSize: 16,
      textTransform: "uppercase",
      fontWeight: 'bold',
    },
    pressed: {
      opacity: 0.7,
    },/*
    icon: {
      alignSelf: 'center',
      marginRight: 10,
    },*/
    refresh: {
      alignSelf: 'center',
      width: 20,
      height: 20,
      resizeMode: 'contain',
    },
    quantityBox: {
      width: 15,
      height: 15,
      borderRadius: 7.5,
      backgroundColor: "green",
    }
  });

  export default styles