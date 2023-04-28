import { Colors } from '../../styles/index';
import { StyleSheet} from 'react-native';

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
      fontSize: 20
    },
});
  
export default styles