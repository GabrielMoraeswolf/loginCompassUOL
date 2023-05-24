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