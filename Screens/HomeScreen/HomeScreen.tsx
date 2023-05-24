import { Text, View,TouchableOpacity, ScrollView} from 'react-native';
import GridCard from './GridCard';
import styles from './Styles'

function HomeScreen() {    

  return( 
    <F>
      <View style ={styles.container}>    
        <Text style ={styles.title} >HOME</Text>     
        <GridCard/>
      </View>
    </ScrollView>
  );
  }

export default HomeScreen;