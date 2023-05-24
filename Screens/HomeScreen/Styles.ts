import { Colors } from "../../styles/index";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  card: {
    flex: 1,
    backgroundColor: Colors.white,
    height: 226,
    width: 186,
    margin: 5,
    borderRadius: 10,
    padding: 5,
  },
  title: {
    color: Colors.primary,
    marginTop: 5,
    marginLeft: 23,
    marginBottom: 20,
    fontSize: 20,
  },
  titleUp: {
    color: Colors.white,
    marginTop: 63,
    marginLeft: 23,
    fontSize: 15,
  },
});

export default styles;
