import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.background,
      },
      textContainer:{
        marginLeft: 40,
        marginTop: 80,
      },
      card:{
        backgroundColor: Colors.cardProduct,
        borderRadius: 20,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
      },
      productTitle: {
        width: '80%',
        fontSize: 16,
        color: Colors.background,
        fontWeight: "bold",
        marginTop:10,
        marginBottom: 10,
        marginLeft: 20,
      },
      cardImage: {
        width: "80%",
        justifyContent: 'center',
        height: 240,
        marginBottom: 10,
        marginTop: 20,
      },
       imageContainer:{
        justifyContent: "center", 
        alignItems: "center",
        marginBottom: 10,
      },
      totalText: {
        fontSize: 20,
        fontWeight: '700',
        color: Colors.titleText,
      },
      priceText:{
        fontSize: 32,
        fontWeight: '600',
        color: Colors.primary,
        marginRight: 2,
      },
      priceContainer: {
        marginTop: 10,
        flexDirection: 'row',
      },
      line: {
        marginTop: 20,
        borderWidth: 1,
        borderBottomColor: Colors.input,
      },
      buttonContainer:{
        alignItems: 'center',
        padding: 10,
      }
})

export default styles;