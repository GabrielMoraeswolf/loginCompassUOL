import { Text, View, ScrollView} from 'react-native';
import GridCard from '../../Components/GridCard/GridCard';
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
              <View style ={styles.headerTextContainer}>
                <Text style ={styles.titleUp}> Welcome</Text>  
                <Text style ={styles.title}> User </Text>
                <View style ={styles.line}/>
            </View>
            <View style ={styles.cartButton}>
              <CartButton onPress={handleCartButton}/>
            </View>     
          </View>
          <View style ={styles.gridContent}>
            <GridCard/>
          </View>
        </View> 
  );
  }

export default HomeScreen;