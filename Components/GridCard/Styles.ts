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
    textAlign: 'left',
    color: Colors.background,
    fontSize: 12,
    fontWeight: "700",
    width: 145,
  },

  priceAndFavoriteContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
  },
  priceContainer:{
    marginRight: 10,
  }
});

export default styles;
