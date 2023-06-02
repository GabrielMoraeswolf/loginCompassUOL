import { Colors } from '../../../styles';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  otherContainer: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
   //justifyContent: 'center',
   //alignContent: 'center',
  },
  card: {
    backgroundColor: Colors.cardProduct,
    borderRadius: 20,
    padding: 10,
    marginLeft: 20,
    marginRight: 20,
    //alignItems: 'center',
    marginBottom: 20,
  },

  headerCard:{
   // display:'flex',
    flexDirection:'row',
    alignItems:'flex-start',
    //gap: 10,
    justifyContent: 'center',
  },
  
  productTitle: {
    width: '80%',
    fontSize: 16,
    color: Colors.background,
    fontWeight: "bold",
    marginTop:10,
    marginBottom: 10,
    marginLeft: 20,
  },
  favoriteButton:{
    marginRight: 15,
  },

  cardImage: {
    width: "80%",
    justifyContent: 'center',
    height: 240,
    marginBottom: 10,
    marginTop: 20,
  },

  imageContainer:{
    justifyContent: "center", 
    alignItems: "center",
    marginBottom: 10,
  },

  starsIconContainer:{
    flexDirection:'row',
    justifyContent:'flex-start',
    //alignItems:'center',
    gap: 3,
    marginLeft: 5,
    marginBottom: 20,
  },
  priceContainer: {
    flexDirection:'row',
    alignItems: 'center',
    //padding: 10,
    justifyContent: 'center',
    //marginLeft: 5,
    //width: 177,
  },
  productDescription:{
    fontSize: 11,
    color: Colors.background,
    fontWeight: "bold",
    marginTop:20,
    marginBottom: 10,
    marginLeft:5,
    marginRight:5,
  },
  backButton: {
    // marginTop: 5,
     marginLeft: 20,
     //marginBottom: 30,
     //alignSelf: 'flex-start',
   },
   arrowButton:{
     //padding: 5,
     width: 30,
     resizeMode: 'contain',
     //marginBottom: 40,
   },
   buttonsContainer:{
     flexDirection: 'row',
     justifyContent: 'space-between',
     height: 40,
     alignItems: 'center', // Adicionado para centralizar verticalmente os botões
    marginBottom: 20, 
   },
   cartButton: {
     //marginRight: 45,
     //marginTop: 45,
    // alignSelf: 'flex-start',
      marginRight: 30,
      marginBottom: 15,
   },
   buyButton:{
    alignItems: 'center',
    padding: 5,
    marginBottom: 10,
   },
   notificationContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo transparente para criar um efeito de sobreposição
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
})
  
export default styles