import { Text, View, ScrollView} from 'react-native';
import GridCard from './GridCard';
import styles from './Styles'

function HomeScreen() {    

  return( 
    
      <View style ={styles.container}>  
        <Text style ={styles.titleUp}> Welcome</Text>  
        <Text style ={styles.title} >Welliton</Text>     
        <GridCard/>
      </View>
    
  );
  }

export default HomeScreen;