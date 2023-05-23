import { Colors } from "../../styles/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
      flex:1,
    },
    card:{
      flex:1,
      backgroundColor: Colors.card,
      height:226,
      width:186,
      margin: 5,
      borderRadius:10,
    },
    title: {      
      color: Colors.primary,
      marginTop:15,
      marginLeft:15,
      marginBottom: 20,
      fontSize: 20,
    },
      cardImage: {
        alignSelf: "center",
        width: 122,
        height: 122,
        top: 14,
        marginBottom: 13,
        
      },
      productTitle: {
        alignSelf: "center",
        color: Colors.cardTitle,
        fontSize: 12,
        fontWeight: "700",
        marginTop: 9,
        marginBottom: 8,
      },
      priceButton: {
        color: Colors.primary,
        borderRadius: 8,
        paddingVertical: 18,
        paddingHorizontal: 18,
        width: 109,
        height: 30,
        left: 7
      },
      textButton: {
      color: Colors.primary,
      fontSize: 14,
      fontWeight: "bold",
      textAlign: "center",
      }
    })
  
export default styles
