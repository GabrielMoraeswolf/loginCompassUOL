import { Colors } from '../../styles/index';
import { StyleSheet} from 'react-native';
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'flex-start',
      justifyContent: 'center',
      backgroundColor: Colors.background,      
    },
    title: {      
     color: Colors.primary,
     marginBottom: '30%',
     marginTop: '10%',
     marginLeft: '28%',
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
      marginRight: 35,
      marginLeft: 35,
    },
    errorText: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'left',
      color: Colors.error,
      marginTop: -12,
      marginLeft: 60,
    },
    invalidLabel: {
      borderColor: Colors.error,
      borderWidth: 2,
    },
    buttonText: {
      color: Colors.inputPlaceHolder,
      fontSize: 18,
      padding: 5,
      alignItems: 'center',
    },
    line:{
      backgroundColor: Colors.primary,
      width:'100%',
      height:1,
      marginTop: '50%'
    },
    spaceSingUp:{
      marginTop: 20,  
      marginBottom:20,  
      marginLeft: '15%'
    },
    singUp: {
      color: Colors.primary
    }
  });

  export default styles