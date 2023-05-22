import { Text, View} from 'react-native';
import GridCard from './GridCard';
import styles from './Styles'

function HomeScreen() {   
  return( 
    <View style ={styles.container}>
      <Text style ={styles.title}>HOME</Text>
      <GridCard/>
    </View>
  );
  }

export default HomeScreen;