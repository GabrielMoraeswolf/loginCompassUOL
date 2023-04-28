import { Colors } from '../../styles/index';
import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    image:{
      marginHorizontal: 10,
    },
    checkbox:{
      alignItems: 'flex-start',
      flexDirection: 'row',
      marginTop: 5,
      marginBottom: 5
    },
    title: {      
     color: Colors.primary,
     marginBottom: '25%',
     fontSize: 36
    },
    termsText:{
      color: Colors.inputPlaceHolder,
      fontSize: 13,
      marginTop: 5,
      marginLeft: 2
    },
    errorText: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'left',
      color: Colors.erro,
      marginTop: -12,
    },
    inputContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: Colors.input,
      paddingHorizontal:16,
      marginBottom: 20,
      marginRight: 35,
      marginLeft: 35,
      
    },
    inputIcon:{
      marginHorizontal: 10
    },
    input: {
      flex: 1,
      height: 48,
      paddingStart: 10,
      color: Colors.inputPlaceHolder,
    },

    button: {
      backgroundColor: Colors.primary,
      width: '80%',
      height: 55,
      borderWidth: 1,
      borderRadius: 30,
      padding: 10,
      marginBottom: 16,
      marginTop: 20,
      alignItems: 'center',
    },
    invalidLabel: {
      borderColor: Colors.erro,
      borderWidth: 2,
    },
    buttonText: {
      color: Colors.inputPlaceHolder,
      fontSize: 18,
      padding: 5,
      alignItems: 'center',
    },
    spaceSingUp:{
      marginTop: '20%'
    },
    singUp: {
      color: Colors.primary
    }
  });
  export default styles