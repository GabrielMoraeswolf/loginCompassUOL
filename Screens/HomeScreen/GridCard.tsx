import { Text, View, FlatList, Image,TouchableOpacity } from "react-native";
import styles from "./Styles";
import React, { useState, useEffect } from "react";
import axios from "axios";

type IconData = {id: number, title: string, price: string, image: string};

const GridCard = (): JSX.Element => {
  const [cardsData, setCardsData] = useState<IconData[]>([]);

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

  const renderCard = ({ item}: { item: IconData, }) => (
    <TouchableOpacity style={styles.card} >     
      <Text style={styles.productTitle} >{item.title}</Text>
      <Image source={{uri: item.image }} style={styles.cardImage} />
      <Text style={styles.priceButton}> R${item.price}</Text>
    </TouchableOpacity>
  );

  return (
    <View>
      <FlatList
        data={cardsData}
        numColumns={2}
        renderItem={renderCard}      
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

export default GridCard;


