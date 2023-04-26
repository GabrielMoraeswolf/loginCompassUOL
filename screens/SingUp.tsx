import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { Colors } from '../styles/index';


function SignupScreen() {
  return (
    <View style={styles.authContent}>
      
      <View style={styles.buttons}>
        
      </View>
    </View>
  );
}

export default SignupScreen;
const styles = StyleSheet.create({
    authContent: {
      marginTop: 64,
      marginHorizontal: 32,
      padding: 16,
      borderRadius: 8,
      backgroundColor: Colors.primary,
      elevation: 2,
      shadowColor: 'black',
      shadowOffset: { width: 1, height: 1 },
      shadowOpacity: 0.35,
      shadowRadius: 4,
    },
    buttons: {
      marginTop: 8,
      
    },
  });