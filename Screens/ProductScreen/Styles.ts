import { Colors } from '../../styles/index';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    marginLeft: 15,
    marginRight: 15,
    
  },
  card: {
    backgroundColor: Colors.cardProduct,
    borderRadius: 20,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },

  headerCard:{
    display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    gap: 10,
    justifyContent: 'center',
  },

  
  productTitle: {
    width: '80%',
    fontSize: 16,
    color: Colors.background,
    fontWeight: "bold",
    marginTop:10,
    marginBottom: 10,
    marginLeft:10,
  },

  cardImageContainer:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: "80%",
    height: 250,
    marginBottom: 10,
  },

  starsIconContainer:{
    flexDirection:'row',
    alignItems:'center',
    gap: 3,
    marginLeft: 10,
  },
  priceAndFavoriteContainer: {
   
  },
  productDescription:{
    fontSize: 14,
    color: Colors.background,
    fontWeight: "bold",
    marginTop:20,
    marginBottom: 10,
    marginLeft:10,
    marginRight:10,
  }

})
  
export default styles