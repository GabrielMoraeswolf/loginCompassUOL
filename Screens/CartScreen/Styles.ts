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
      cardContainer: {
        flex: 1,
        backgroundColor: Colors.white,
        height: 226,
        width: 186,
        margin: 5,
        borderRadius: 10,
        padding: 5,
        justifyContent: 'center',
      },
      card:{
        backgroundColor: Colors.cardProduct,
        borderRadius: 20,
        padding: 10,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 20,
        width: 358,
        height: 139,
      },
      productTitle: {
        width: '60%',
        fontSize: 14,
        color: Colors.background,
        fontWeight: "bold",
        marginTop:10,
        marginBottom: 10,
        marginLeft: 130,
      },
      EmptyCartTextUp:{
        fontSize: 25,
        justifyContent: 'center',
        color: Colors.white,
        marginTop: '40%',
        marginBottom: '10%',
        textAlign: 'center',
      },
      EmptyCartTextDown:{
        textAlign: 'center',
        fontSize: 18,
        justifyContent: 'center',
        marginBottom: '40%',
        color: Colors.white,
      },
      cardImage: {
        alignSelf: "center",
        width: 120,
        height: 120,
        top: 14,
        marginBottom: 10,
      },
       imageContainer:{
        position: 'absolute',
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
        marginBottom: 30,
      },
      priceContainer: {
        marginTop: 10,
        flexDirection: 'row',
      },
      priceCardContainer: {
        marginLeft: 128,
      },
     priceCard: {
      width: 138,
      height: 43,
      marginTop: 10,
     },
      line: {
        marginTop: 50,
        borderWidth: 1,
        borderBottomColor: Colors.input,
      },
      buttonContainer:{
        alignItems: 'center',
        justifyContent: "flex-end",
        marginTop: '5%',
        marginBottom: '10%',
        padding: 5,
      }
})

export default styles;