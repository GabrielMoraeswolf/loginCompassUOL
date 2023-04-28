import { Text, View} from 'react-native';
import GridCard from './gridCard';
import styles from './index'

function HomeScreen() {   
  return( 
    <View style ={styles.container}>
      <Text style ={styles.title}>HOME</Text>
      <GridCard/>
    </View>
  );
  }

export default HomeScreen;