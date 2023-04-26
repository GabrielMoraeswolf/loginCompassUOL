import { StyleSheet, Text, View,TextInput, TouchableOpacity,Pressable} from 'react-native';
import { Colors } from '../styles/index';
import React, { useState } from 'react';
import{ NavProps } from '../types/navigation';

function LoginScreen({ navigation } :NavProps) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSingUp = () => {
      navigation.navigate('SignUp');
    }
    const handleLogin = () => {
      
      if (!email || !password) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
      navigation.navigate('Home');
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>WELCOME</Text>
        <TextInput
          style={styles.input}
          placeholder="Your email"
          onChangeText={(text) => setEmail(text)}
          value={email}
        />
        <TextInput
          style={styles.input}
          placeholder="*********"
          secureTextEntry={true}
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
        <TouchableOpacity style={styles.button} onPress={handleLogin}> 
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <Pressable >
          <Text style={styles.buttonText}>Don't have an account?
            <Text onPress={handleSingUp}> Sing Up</Text>
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
     marginBottom: 100
     
    },
    input: {
      height: 40,
      backgroundColor: Colors.input,
      color: Colors.inputPlaceHolder,
      width: '80%',
      borderWidth: 1,
      borderRadius: 30,
      padding: 10,
      marginBottom: 16,
    },
    button: {
      backgroundColor: Colors.primary,
      width: '80%',
      borderWidth: 1,
      borderRadius: 30,
      padding: 10,
      marginBottom: 16,
      alignItems: 'center',
    },
    buttonText: {
      color: Colors.inputPlaceHolder,
      fontSize: 16,
    },
    
  });

export default LoginScreen;