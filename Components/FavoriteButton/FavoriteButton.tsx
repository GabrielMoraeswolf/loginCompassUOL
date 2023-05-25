import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../styles/index";

type Props ={
  size: number,
}
const FavoriteButton = ({size}:Props) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const handlePress = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <TouchableOpacity onPress={handlePress}>
      <View>
        <Ionicons
          name={isFavorite ? "heart" : "heart-outline"}
          size={size}
          color={isFavorite ? Colors.favoriteButton : Colors.favoriteButton}
        />
      </View>
    </TouchableOpacity>
  );
};

export default FavoriteButton;
