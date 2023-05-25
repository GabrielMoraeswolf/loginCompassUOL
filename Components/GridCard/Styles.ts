import { Colors } from "../../styles/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cardContainer: {
    flex: 1,
    backgroundColor: Colors.white,
    height: 226,
    width: 186,
    margin: 5,
    borderRadius: 10,
    padding: 5,
    justifyContent: 'center',
  },
  card :{
    alignItems: 'center',
    //alignSelf: 'center',
  },
  imageContainer: {
    marginBottom: 10,
  },
  cardImage: {
    alignSelf: "center",
    width: 120,
    height: 120,
    top: 14,
    marginBottom: 10,
  },
  productTitle: {
   // alignSelf: "center",
    textAlign: 'left',
    //marginLeft: 10,
    color: Colors.background,
    fontSize: 12,
    fontWeight: "700",
    //marginTop: 9,
   // marginBottom: 8,
    width: 145,
  },

  priceAndFavoriteContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
   // marginRight: 8,
    //marginLeft: 7,
  },
  priceContainer:{
    marginRight: 10,
  }
});

export default styles;
