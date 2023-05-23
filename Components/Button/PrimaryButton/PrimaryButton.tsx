import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useState } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from "./Styles";

function PrimaryButton({ children, onPress }: any) {
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
          <Icon name="spinner" size={16} color={'white'} style={styles.icon} />
        }
      </View>
    </Pressable>
  );
}

export default PrimaryButton;