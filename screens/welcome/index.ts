import { Colors } from '../../styles/index';
import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    title: {      
     color: Colors.primary,
     marginBottom: '30%',
     fontSize: 36
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
      marginBottom: 10,
      alignItems: 'center',
    },
    errorText: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'left',
      color: Colors.erro,
      marginTop: -10,
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
      marginTop: '50%'
    },
    singUp: {
      color: Colors.primary
    }
  });

  export default styles