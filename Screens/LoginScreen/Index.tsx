import { Text, View,TextInput,Image, TouchableOpacity,Pressable} from 'react-native';
import styles from './Styles'
import React, { useState } from 'react';
import{ NavProps } from '../../types/navigation';

const icons={// Assets icons
  mail:require('../../Assets/mail_.png'),
  lock:require('../../Assets/lock_.png'),
  user:require('../../Assets/user_.png')
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

      if(!email || !password ){//component check function

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
        < >
          {emailErro && (<Text style={styles.errorText}>{emailErro}</Text>)}
        </>

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
        < >
          {passwordErro && (<Text style={styles.errorText}>{passwordErro}</Text>)}
        </>
        <TouchableOpacity style={styles.button} onPress={handleLogin}> 
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <View style={styles.line} />
        <Pressable style={styles.spaceSingUp}>
          <Text style={styles.buttonText}>Don't have an account?
            <Text style={styles.singUp} onPress={handleSingUp}> Sing Up</Text>
          </Text>
        </Pressable>
      </View>
    );
};
 

export default LoginScreen;