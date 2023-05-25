import { Text, View, FlatList, Image, TouchableOpacity } from "react-native";
import styles from "./Styles";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { PriceCard } from "../PriceCard/PriceCard";
import FavoriteButton from "../FavoriteButton/FavoriteButton";
import { useNavigation } from "@react-navigation/native";

type IconData = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

const GridCard = (): JSX.Element => {
  const [cardsData, setCardsData] = useState<IconData[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    fetchCardsData();
  }, []);

  const fetchCardsData = async () => {
    try {
      const response = await axios.get("https://fakestoreapi.com/products/");
      setCardsData(response.data);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  const handleCardPress = (item: IconData) => {
    navigation.navigate("ProductScreen", {
      title: item.title,
      price: item.price,
      image: item.image,
      description: item.description,
    });
  };
  const renderCard = ({ item }: { item: IconData }) => (
    <TouchableOpacity style={styles.cardContainer} onPress={() => handleCardPress(item)}>
      <View style={styles.card}>
        <Text style={styles.productTitle} numberOfLines={1}>
          {item.title}
        </Text>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.cardImage} />
        </View>
        <View style={styles.priceAndFavoriteContainer}>
          <View style={styles.priceContainer}>
            <PriceCard priceText={"R$"} priceNumber={item.price} />
          </View>
          <View>
            <FavoriteButton />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );

  return (
    <FlatList
      data={cardsData}
      numColumns={2}
      renderItem={renderCard}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};

export default GridCard;
