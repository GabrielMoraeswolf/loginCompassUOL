import {  Text, View,TextInput, TouchableOpacity,Pressable,Image} from 'react-native';
import Checkbox from 'expo-checkbox';
import styles from './Styles'
import React, { useState } from 'react';
import{ NavProps } from '../../Types/navigation';


const icons={ // Assets icons
  mail:require('../../assets/mail_.png'),
  lock:require('../../assets/lock_.png'),
  user:require('../../assets/user_.png')
}
function SignUpScreen({ navigation } :NavProps) {

    const [email, setEmail] = useState<string | undefined>('');
    const [emailErro, setEmailErro] = useState<string | undefined>();
    const [invalidEmail, setinvalidEmail] = useState<boolean >(true);
    const [password, setPassword] = useState<string | undefined>('');
    const [passwordErro, setpasswordErro] = useState<string | undefined>();
    const [invalidPassword, setinvalidPassword] = useState<boolean >(true);
    const [userName,setUserName] = useState<string | undefined>('');
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
      if (!email || !password || !userName || !isChecked) {//component check function
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
        <Text style={styles.title}>SIGN UP</Text>
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
        <View style={[styles.inputContainer, !invalidUserName && styles.invalidLabel ]}>
          <Image source={icons.user} style={styles.inputIcon} />
          <TextInput
            style={styles.input}
            placeholder="username"
            onChangeText={(text) => setUserName(text)}
            value={userName}
          />
        </View>
        < >
          {userNameErro && (<Text style={styles.errorText}>{userNameErro}</Text>)}
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
        <View style={styles.checkbox}>  
          <Checkbox
            style={[styles.checkbox, !invalidCheckBox && styles.invalidLabel]}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? '#4630EB' : undefined}
          />
          <Text style={styles.termsText}>
            Agree To 
            <Text style={{textDecorationLine: 'underline'}}> Terns And Conditions</Text>
          </Text>
        </View>
        < >
          {checkBoxErro && (<Text style={styles.errorText}>{checkBoxErro}</Text>)}
        </>   
        <TouchableOpacity style={styles.button} onPress={handleLogin}> 
          <Text style={styles.buttonText}>CREATE ACCOUNT</Text>
        </TouchableOpacity> 
        <View style={styles.line} />
          <Pressable style={styles.spaceSingUp}> 
            <Text style={styles.buttonText}>Already have an account?
              <Text style={styles.singUp} onPress={handleSingIn}> Log In</Text>
            </Text>
          </Pressable>
        </View>
   
    );
};
  
  export default SignUpScreen;