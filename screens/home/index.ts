import { Colors } from '../../styles/index';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    container:{
      flex:1,
      backgroundColor: Colors.background,
      paddingHorizontal: 16,
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems:'center',
      marginBottom: 10,
      marginTop:50
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
      marginBottom: '25%',
      fontSize: 36
    },
});
  
export default styles