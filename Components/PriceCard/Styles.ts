import { Colors } from "../../styles/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    textPriceCard: {
        position: "absolute",
        alignSelf: "center",
        marginTop: 6,
        color: Colors.primary,
        fontSize: 14,
        fontWeight: "bold",
        textAlign: "center",
      },
      priceCard: {
        backgroundColor: Colors.priceButton,
        borderRadius: 8,
        paddingVertical: 15,
        paddingHorizontal: 18,
        width: 109,
        height: 10,
        left: 7,
        marginTop: 7,
      },
});

export default styles;