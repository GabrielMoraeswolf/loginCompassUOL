import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor: Colors.background,
      },
      titleTextContainer:{
        marginLeft: 25,
        marginTop: 40,
      },
      totalText:{
        fontSize: 20,
        fontWeight: '700',
        color: Colors.titleText,
      },
      priceContainer:{
        marginTop: 5,
        flexDirection: 'row',
      },
      priceText:{
        fontSize: 32,
        fontWeight: '600',
        color: Colors.primary,
        marginRight: 2,
        marginBottom: 30,
      },
      card:{
        backgroundColor: Colors.cardProduct,
        borderRadius: 20,
        marginLeft: 25,
        marginRight: 25,
        height: 139,
        marginBottom: 25,
      },
      imageAndTextContainer:{
        flexDirection:'row',
        marginLeft: 10,
      },
      textAndPriceContainer:{
        flexDirection:'column',
        marginTop: 20,
        padding: 5,
      },
      textContainer:{
        width: 175,
      },
      productTitle:{
        fontSize: 14,
        color: Colors.background,
        fontWeight: "bold",
      },
      imageContainer:{
        marginBottom: 10,
      },
      cardImage: {
        alignSelf: "center",
        width: 110,
        height: 110,
        top: 14,
        marginBottom: 10,
      },
      priceCardContainer:{
        marginTop: 20,
      },
      buttonRemove:{ 
        bottom: 12,  
        left: 300,
        zIndex: 1,
      },
      buttonContainer:{
        alignItems: 'center',
        justifyContent: "flex-end",
        marginTop: '5%',
        marginBottom: '10%',
        padding: 5,
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
      line: {
        marginTop: 50,
        borderWidth: 1,
        borderBottomColor: Colors.input,
      },

      
      /*textContainer:{

      },
      card:{
        flex: 1,
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
        width: 110,
        height: 110,
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
     buttonRemove: {
       //position: 'absolute',
       top: 10,
       right: 10,
        zIndex: 1, // Garante que o botão fique sobreposto aos outros elementos
      },
      cardRender: {
        flex: 1,
        //justifyContent: 'flex-end',
        //justifyContent: 'center',
        //alignItems: 'center',
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
      },*/
    })
    
export default styles;