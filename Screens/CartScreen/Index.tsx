import { ScrollView, View, Text,Image,TouchableOpacity } from "react-native";
import styles from "./Styles";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { CartContext } from "../../Components/Context/CartContext";
import React, {  useContext } from "react";
import { PriceCardHome } from "../../Components/PriceCardHome/PriceCardHome";


export const CartScreen = () => {
    const cartContext = useContext(CartContext);

    const TotalPrice = () => { //sum total price function
      return cartContext.cards.reduce((total, card) => total + card.price, 0);
    };
    const removeCard = (cardId: number) => {
      cartContext.removeCard(cardId);
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
         
    <TouchableOpacity onPress={() => removeCard(card.id)} >{/*mudar aqui o butao de remover*/}
    <Text style={styles.buttonRemove} >X</Text>
    </TouchableOpacity> 
                  
                 
                  <Text style={styles.productTitle} numberOfLines={2}>
                    {card.title}
                  </Text>
                  <View style={styles.imageContainer}>
                    <Image
                      source={{ uri: card.image }}
                      style={styles.cardImage}
                      resizeMode="contain"
                    /> 
                    </View>
                    <View style={styles.priceCardContainer}>
                      <PriceCardHome style={styles.priceCard} priceText={"R$"} priceNumber={card.price} />
                    </View>
                    <View style={styles.line} />
                   </View>
                   
              ))} 
              
            </View>
            
          )}
      
      <View style={styles.buttonContainer}>
        <PrimaryButton>BUY</PrimaryButton>
      </View>
    </ScrollView>
    );
}

