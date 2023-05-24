import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  cartButton: {
    width: 28,
    height: 28,
    position: 'absolute'
  },
  badge: {
    position: 'relative',
    left: 17,
    bottom: 4,
    backgroundColor: 'green',
    borderRadius: 10,
    width: 15,
    height: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  badgeText: {
    color: 'white',
    fontSize: 9,
  },
});


export default styles;
