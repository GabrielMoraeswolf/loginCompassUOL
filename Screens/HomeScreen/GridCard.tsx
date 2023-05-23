import { Text, View, FlatList, Image,TouchableOpacity } from "react-native";
import styles from "./Styles";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigation } from '@react-navigation/native';
import { PriceCard } from "../../Components/PriceCard/PriceCard";
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";
import ProductScreen from "../ProductScreen/Index";

type IconData = {id: number, title: string, price: number, image: string};

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
      navigation.navigate('ProductScreen',{
        title: item.title,
        price: item.price,
        image: item.image
      });
    
  };
  const renderCard = ({ item }: { item: IconData }) => (
    <TouchableOpacity style={styles.card} onPress={() => handleCardPress(item)}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Image source={{ uri: item.image }} style={styles.cardImage} />
      <View style={styles.priceAndFavoriteContainer}>
        <PriceCard priceText={"R$"} priceNumber={item.price} />
        <FavoriteButton />
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
