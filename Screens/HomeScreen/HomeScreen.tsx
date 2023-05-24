import { Text, View, ScrollView} from 'react-native';
import GridCard from './GridCard';
import styles from './Styles'
import CartButton from '../../Components/CartButton/CartButton';
import { NavProps } from '../../types/navigation';

function HomeScreen({navigation}:NavProps) {    
  const handleCartButton = () => {
    navigation.navigate('Cart');
  }

  return( 
    
      <View style ={styles.container}>
        <View style ={styles.header}>
          <View>
            <Text style ={styles.titleUp}> Welcome</Text>  
            <Text style ={styles.title} >Welliton</Text>
          </View>
          <View style ={styles.cartButton}>
            <CartButton onPress={handleCartButton}/>
          </View>     
        </View>
        <GridCard/>
      </View>
    
  );
  }

export default HomeScreen;