import { Colors } from '../../styles/index';
import { StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    quantityContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10,
      },
      quantityButton: {
        width: 50,
        height: 50,
        backgroundColor: Colors.background,
        borderRadius: 50,
        justifyContent: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 1, height: 4},
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 4, //ANDROID
      },
      qtButtonText: {
        fontSize: 46,
        fontWeight: '500',
        color: Colors.primary,
        textAlign: 'center',
        lineHeight: 52,
      },
      quantityText: {
        fontSize: 42,
        fontWeight: '400',
        color: Colors.primary,
        textAlign: 'center',
        marginLeft: 10,
        marginRight: 10,
      },
})
  
export default styles