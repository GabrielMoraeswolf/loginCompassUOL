import { View, Text, Pressable, Image } from "react-native";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./Styles";

function PrimaryButton({ children, onPress, disabled }: any) { {/* PRESS -> NAVIGATION || CHILDREN -> TEXT */}
  const [pressed, setPressed] = useState(false);

  const handlePress = () => {
    if (!disabled) {
      onPress();
    }
  };

  return (
    <Pressable 
      onPress={onPress}
      onPressIn={() => setPressed(true)}
      onPressOut={() => setPressed(false)}
      disabled={disabled}
    >
      <View style={[styles.button, pressed && styles.pressed, disabled && styles.disabledButton]}>
        {!pressed ?
          <Text style={styles.buttonText}>{children}</Text> :
          <Image source={require('../../assets/refresh-icon.png')} style={styles.refresh}/>
        }
      </View>
    </Pressable>
  );
}

export default PrimaryButton;