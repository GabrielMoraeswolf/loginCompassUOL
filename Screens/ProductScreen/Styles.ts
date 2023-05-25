import { Colors } from '../../styles/index';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //marginTop: 55,
  },
  card: {
    backgroundColor: Colors.input,
    borderRadius: 10,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    alignItems: 'center',
  },
  productTitle: {
    fontSize: 18,
    color: Colors.white,
    fontWeight: "bold",
    marginBottom: 10,
    marginRight: 10
  },
  cardImage: {
    width: "90%",
    justifyContent: 'center',
    height: 250,
    marginBottom: 10,
  },
  priceAndFavoriteContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  backButton: {
   // marginTop: 5,
    marginLeft: 25,
    //marginBottom: 30,
    //alignSelf: 'flex-start',
  },
  arrowButton:{
    padding: 5,
    width: 30,
    resizeMode: 'contain',
    borderBottomWidth: 1,
    borderColor: 'red',
  },
  buttonsContainer:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 100,
  },
  cartButton: {
    marginRight: 45,
    marginTop: 45,
    alignSelf: 'flex-start',
  }
})
  
export default styles