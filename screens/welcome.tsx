import { StyleSheet, Text, View,TextInput,Image, TouchableOpacity,Pressable} from 'react-native';
import { Colors } from '../styles/index';
import React, { useState } from 'react';
import{ NavProps } from '../types/navigation';

const icons={
  mail:require('../assets/mail_.png'),
  lock:require('../assets/lock_.png'),
  user:require('../assets/user_.png')
}
function LoginScreen({ navigation } :NavProps) {

    const [email, setEmail] = useState('');
    const [emailErro, setEmailErro] = useState<string | undefined>();
    const [invalidEmail, setinvalidEmail] = useState<boolean >(true);
    const [password, setPassword] = useState('');
    const [passwordErro, setpasswordErro] = useState<string | undefined>();
    const [invalidPassword, setinvalidPassword] = useState<boolean >(true);
  
    
    const handleSingUp = () => {
      navigation.navigate('SignUp');
    }
    const handleLogin = () => {
      setEmailErro('');
      setpasswordErro('');
      setinvalidEmail(true);
      setinvalidPassword(true);

      if(!email || !password ){

        if (!email ) {
          setinvalidEmail(false)
          setEmailErro('Please enter a valid email address')
        };
        if (!password) {
          setinvalidPassword(false);
          setpasswordErro('Please enter a valid password')
        };
        return;
      }
      
      navigation.navigate('Home');
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME</Text>   
        <View style={[styles.inputContainer, !invalidEmail && styles.invalidLabel ]}>
          <Image source={icons.mail} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Your email"
            onChangeText={(text) => setEmail(text)}
            value={email}
          />
        </View>
        <View >
          {emailErro && (<Text style={styles.errorText}>{emailErro}</Text>)}
        </View>

        <View style={[styles.inputContainer, !invalidPassword && styles.invalidLabel ]}>
          <Image source={icons.lock} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="Your password"
            secureTextEntry={true}
            onChangeText={(text) => setPassword(text)}
            value={password}
          />
        </View>
        <View >
          {passwordErro && (<Text style={styles.errorText}>{passwordErro}</Text>)}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}> 
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Pressable style={styles.spaceSingUp}>
          <Text style={styles.buttonText}>Don't have an account?
            <Text style={styles.singUp} onPress={handleSingUp}> Sing Up</Text>
          </Text>
        </Pressable>
      </View>
    );
};
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
    title: {      
     color: Colors.primary,
     marginBottom: '30%',
     fontSize: 36
    },
    inputContainer:{
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 25,
      backgroundColor: Colors.input,
      paddingHorizontal:16,
      marginBottom: 20,
      marginRight: 35,
      marginLeft: 35,
      
    },
    inputIcon:{
      marginHorizontal: 10
    },
    input: {
      flex: 1,
      height: 48,
      paddingStart: 10,
      color: Colors.inputPlaceHolder,
    },
    button: {
      backgroundColor: Colors.primary,
      width: '80%',
      height: 55,
      borderWidth: 1,
      borderRadius: 30,
      padding: 10,
      marginBottom: 10,
      alignItems: 'center',
    },
    errorText: {
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      textAlign: 'left',
      color: Colors.erro,
      marginTop: -10,
    },
    invalidLabel: {
      borderColor: Colors.erro,
      borderWidth: 2,
    },
    buttonText: {
      color: Colors.inputPlaceHolder,
      fontSize: 18,
      padding: 5,
      alignItems: 'center',
    },
    spaceSingUp:{
      marginTop: '50%'
    },
    singUp: {
      color: Colors.primary
    }
  });

export default LoginScreen;