import { View, Text, Pressable, StyleSheet, Image } from "react-native";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./Styles";

function PrimaryButton({ children, onPress }: any) { {/* PRESS -> NAVIGATION || CHILDREN -> TEXT */}
  const [pressed, setPressed] = useState(false);

  return (
    <Pressable 
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
    >
      <View style={[styles.button, pressed && styles.pressed]}>
        {!pressed ?
          <Text style={styles.buttonText}>{children}</Text> :
          <Image source={require('../../assets/refresh-icon.png')} style={styles.refresh}/>
          //<Icon name="spinner" size={16} color={'white'} style={styles.icon} />
        }
      </View>
    </Pressable>
  );
}

export default PrimaryButton;