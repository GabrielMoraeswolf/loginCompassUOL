import { Colors } from "../../styles/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.card,
    height: 226,
    width: 186,
    margin: 5,
    borderRadius: 10,
  },
  title: {
    color: Colors.primary,
    marginTop: 15,
    marginLeft: 15,
    marginBottom: 20,
    fontSize: 20,
  },
  cardImage: {
    alignSelf: "center",
    width: 122,
    height: 105,
    top: 12,
    marginBottom: 13,
  },
  productTitle: {
    alignSelf: "center",
    color: Colors.cardTitle,
    fontSize: 11,
    fontWeight: "700",
    marginTop: 5,
    marginBottom: 3,
    marginLeft: 17,
    marginRight: 17,
  },
  priceCard: {
    backgroundColor: Colors.priceButton,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 18,
    width: 109,
    height: 10,
    left: 7,
    marginTop: 7,
  },
  textPriceCard: {
    position: "absolute",
    alignSelf: "center",
    marginTop: 6,
    color: Colors.primary,
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
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