import { StyleSheet } from "react-native";
import { Colors } from "../../styles";

const styles = StyleSheet.create({
container: {
    position: 'absolute',
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.removeButton,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: 'black',
    shadowOffset: {width: 1, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2, //ANDROID
  },
  text:{
    fontSize: 48,
    fontWeight: '600',
    color: Colors.cardTitle,
    textAlign: 'center',
    lineHeight: 52,
  },

});

export default styles;