import { Colors } from "../../styles/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textPriceCard: {
        //position: "absolute",
        //alignSelf: "center",
        //marginTop: 6,
        color: Colors.primary,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
        //justifyContent: 'center',
      },
      priceCard: {
        backgroundColor: Colors.priceButton,
        borderRadius: 8,
        //paddingVertical: 15,
        //paddingHorizontal: 18,
        width: 109,
        height: 30,
        //left: 7,
        //marginTop: 7,
        justifyContent: 'center',
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, //ANDROID
      },
});

export default styles;