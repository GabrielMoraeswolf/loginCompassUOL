import { ScrollView, View, Text,Image } from "react-native";
import styles from "./Styles";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { CartContext } from "../../Components/Context/CartContext";
import { PriceCard } from "../../Components/PriceCard/PriceCard";
import React, {  useContext } from "react";


export const CartScreen = () => {
    const cartContext = useContext(CartContext);

    const TotalPrice = () => { //sum total price function
      return cartContext.cards.reduce((total, card) => total + card.price, 0);
    };

    return(
        <ScrollView style ={styles.container}>
            <View style ={styles.textContainer}>
               <Text style ={styles.totalText}>TOTAL</Text>
               <View style ={styles.priceContainer}>
                    <Text style ={styles.priceText}>R$</Text>
                    <Text style ={styles.priceText}>{TotalPrice().toFixed(2)}</Text>
               </View>
            </View>
            {cartContext.cards.length === 0 ? ( 
              <View>
                <Text style={styles.EmptyCartTextUp}>Ops, Empty Cart :{"("}</Text> 
                <Text style={styles.EmptyCartTextDown}>Add a product</Text>
              </View> ) : (
            <View>
              {/* Render cards */}
              {cartContext.cards.map((card, index) => (
                <View key={index} style={styles.card}>
                  <Text style={styles.productTitle} numberOfLines={1}>
                    {card.title}
                  </Text>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: card.image }}
                      style={styles.cardImage}
                      resizeMode="contain"
                    />
                    <View>
                      <PriceCard priceText={"R$"} priceNumber={card.price} />
                    </View>
                  </View>
                </View>
              ))} 
              <View style={styles.line} />
            </View>
            
          )}
      
      <View style={styles.buttonContainer}>
        <PrimaryButton>BUY</PrimaryButton>
      </View>
    </ScrollView>
    );
};

