import React, { useContext } from "react";
import { TouchableOpacity, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Colors } from "../../styles/index";
import { FavoriteContext } from "../Context/FavoriteContext";

type Props = {
  size: number;
  productId: number;
};

const FavoriteButton = ({ size, productId }: Props) => {
  const { favorites, toggleFavorite } = useContext(FavoriteContext);

  const isFavorite = favorites.includes(productId); // <-- Adicione o ID do produto aqui

  const handlePress = () => {
    toggleFavorite(productId); // <-- Adicione o ID do produto aqui
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
