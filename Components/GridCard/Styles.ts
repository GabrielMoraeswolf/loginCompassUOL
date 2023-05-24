import { Colors } from "../../styles/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  card: {
    flex: 1,
    backgroundColor: Colors.white,
    height: 226,
    width: 186,
    margin: 5,
    borderRadius: 10,
    padding: 5,
  },
  cardImage: {
    alignSelf: "center",
    width: 122,
    height: 122,
    top: 14,
    marginBottom: 13,
  },
  productTitle: {
    alignSelf: "center",
    color: Colors.background,
    fontSize: 12,
    fontWeight: "700",
    marginTop: 9,
    marginBottom: 8,
  },

  priceAndFavoriteContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 4,
    marginRight: 8,
    marginLeft: 7,
  },
});

export default styles;
