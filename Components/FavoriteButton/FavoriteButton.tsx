import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../styles/index";


const FavoriteButton = () => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={50}
          color={isFavorite ? Colors.background : Colors.background}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
