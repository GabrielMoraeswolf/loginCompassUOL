import { Text, View, FlatList, Image, Button } from "react-native";
import styles from "./Styles";
import React, { useState, useEffect } from "react";
import axios from "axios";

const GridCard = () => {
  const [cardsData, setCardsData] = useState([]);

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

  const renderCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.productTitle}>{item.title}</Text>
      <Image source={{uri: item.image }} style={styles.cardImage} />
      <Text style={styles.priceButton}> ${item.price}</Text>
    </View>
  );

  return (
    <View>
      <FlatList
        data={cardsData}
        numColumns={2}
        renderItem={renderCard}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
};

export default GridCard;


