import { Colors } from "../../styles/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textPriceCard: {
        //position: "absolute",
        //alignSelf: "center",
        //marginTop: 6,
        color: Colors.primary,
        fontSize: 18,
        fontWeight: "600",
        textAlign: "center",
        //justifyContent: 'center',
      },
      priceCard: {
        backgroundColor: Colors.priceButton,
        borderRadius: 8,
        //paddingVertical: 15,
        //paddingHorizontal: 18,
        width: 125,
        height: 50,
        //left: 7,
        //marginTop: 7,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, //ANDROID
      },
});

export default styles;