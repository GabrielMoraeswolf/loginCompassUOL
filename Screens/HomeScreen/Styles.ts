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
  header:{
    flexDirection: 'row',
    alignItems: 'baseline',
    justifyContent: 'space-between',
    marginTop: 10,
    //marginTop: 20,
  },
  cartButton: {
    marginRight: 30,
    alignItems: 'flex-end',
  },
  headerTextContainer:{
    marginLeft: 15,
  },
  title: {      
    color: Colors.primary,
    fontSize: 20,
    fontWeight: '500',
    textAlign: 'left',
  },
  titleUp: {      
    color: Colors.white,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'left',
  },
  line: {
    borderWidth: 3,
    width: 55,
    borderBottomColor: Colors.white,
    alignSelf: 'flex-start',
  },
  gridContent:{
    //marginTop: 5,
    padding: 10,
    flex: 1,
  }
});

export default styles;
