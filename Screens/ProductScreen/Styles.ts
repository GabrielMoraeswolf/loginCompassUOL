import { Colors } from '../../styles/index';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 55,
    marginLeft: 15,
    marginRight: 15
  },
  card: {
    backgroundColor: Colors.input,
    borderRadius: 10,
    padding: 10,
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
})
  
export default styles