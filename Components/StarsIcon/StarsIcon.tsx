import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../styles/index";



const StarsIcon = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <Ionicons
          name={isFavorite ? "star" : "star-outline"}
          size={30}
          color={isFavorite ? Colors.primary : Colors.primary}
        />
      </View>
    </TouchableOpacity>
  );
};

export default StarsIcon;

