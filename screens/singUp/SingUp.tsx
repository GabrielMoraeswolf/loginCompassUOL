import {  Text, View,TextInput, TouchableOpacity,Pressable,Image} from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from './index'
import React, { useState } from 'react';
import{ NavProps } from '../../types/navigation';

const icons={
  mail:require('../assets/mail_.png'),
  lock:require('../assets/lock_.png'),
  user:require('../assets/user_.png')
}
function SignupScreen({ navigation } :NavProps) {

    const [email, setEmail] = useState('');
    const [emailErro, setEmailErro] = useState<string | undefined>();
    const [invalidEmail, setinvalidEmail] = useState<boolean >(true);
    const [password, setPassword] = useState('');
    const [passwordErro, setpasswordErro] = useState<string | undefined>();
    const [invalidPassword, setinvalidPassword] = useState<boolean >(true);
    const [userName,setUserName] = useState('');
    const [userNameErro, setUserNameErro] = useState<string | undefined>();
    const [invalidUserName, setinvalidUserName] = useState<boolean >(true);

    const [isChecked, setChecked] = useState<boolean >(false);
    const [checkBoxErro, setCheckBoxErro] = useState<string | undefined>();
    const [invalidCheckBox, setinvalidCheckBox] = useState<boolean >(true);

    const handleSingIn = () => {
      navigation.navigate('Login');
    }
    const handleLogin = () => {
      setEmailErro('');
      setpasswordErro('');
      setUserNameErro('');
      setinvalidEmail(true);
      setinvalidPassword(true);
      setinvalidUserName(true);
      setinvalidCheckBox(true);
      setCheckBoxErro('');
      if (!email || !password || !userName || !isChecked) {
        if (!email ) {
          setinvalidEmail(false)
          setEmailErro('Please enter a valid email address')
        };
        if (!password) {
          setinvalidPassword(false);
          setpasswordErro('Please enter a valid password')
        };
        if (!userName) {
          setinvalidUserName(false);
          setUserNameErro('Please enter a valid username')
        };
        if (!isChecked) {
          setinvalidCheckBox(false);
          setCheckBoxErro('Please accept the terms')
        };
        return;
      }
      navigation.navigate('Home');
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>SING UP</Text>
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
        <View style={[styles.inputContainer, !invalidUserName && styles.invalidLabel ]}>
          <Image source={icons.user} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="username"
            onChangeText={(text) => setUserName(text)}
            value={userName}
          />
        </View>
        <View >
          {userNameErro && (<Text style={styles.errorText}>{userNameErro}</Text>)}
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
        <View style={styles.checkbox}>  
          <Checkbox
            style={[styles.checkbox, !invalidCheckBox && styles.invalidLabel]}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.termsText} > Agree To Terns And Conditions</Text>
        </View>
        <View >
          {checkBoxErro && (<Text style={styles.errorText}>{checkBoxErro}</Text>)}
        </View>
        <TouchableOpacity style={styles.button} onPress={handleLogin}> 
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity>
        <Pressable style={styles.spaceSingUp}>
          <Text style={styles.buttonText}>Already have an account?
            <Text style={styles.singUp} onPress={handleSingIn}> Sing In</Text>
          </Text>
        </Pressable>
      </View>
    );
};
  
  export default SignupScreen;