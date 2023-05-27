import { ScrollView, View, Text,Image,TouchableOpacity,Alert } from "react-native";
import styles from "./Styles";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { CartContext } from "../../Components/Context/CartContext";
import React, {  useContext } from "react";
import { PriceCardHome } from "../../Components/PriceCardHome/PriceCardHome";
import ButtonRemove from "../../Components/ButtonRemove/ButtonRemove";


export const CartScreen = () => {
    const cartContext = useContext(CartContext);

    const handleBuyButtonPress = () => {
      Alert.alert(
        "Good!",
        "Product successfully purchased.",
        [{ text: "OK", onPress: clearCart }],
        { cancelable: false }
      );
    };

    const clearCart = () => {
      cartContext.clearCart(); 
    };

    const TotalPrice = () => { //sum total price function
      return cartContext.cards.reduce((total, card) => total + card.price, 0);
    };
    const removeCard = (cardId: number) => {
      cartContext.removeCard(cardId);
    };
    const clearCart = () => {
      cartContext.clearCart(); 
    };

    const handleBuyButtonPress = () => {
      Alert.alert(
        "Good!",
        "Product successfully purchased.",
        [{ text: "OK", onPress: clearCart }],
        { cancelable: false }
      );
    };
    
    return(
        <ScrollView style ={styles.container}>
            <View style ={styles.titleTextContainer}>
               <Text style ={styles.totalText}>TOTAL</Text>
               <View style ={styles.priceContainer}>
                    <Text style ={styles.priceText}>R$</Text>
                    <Text style ={styles.priceText}>{TotalPrice().toFixed(2)}</Text>
               </View>
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
                  <View style={styles.buttonRemove}>
                    <ButtonRemove onPress={() => removeCard(card.id)}/>
                  </View>
                  <View /* style={styles.cardRender} */>

                    <View style={styles.imageAndTextContainer}> 
                      <View style={styles.imageContainer}>
                        <Image
                          source={{ uri: card.image }}
                          style={styles.cardImage}
                          resizeMode="contain"
                        /> 
                      </View>
                      <View style={styles.textAndPriceContainer}>
                        <View style={styles.textContainer}>
                          <Text style={styles.productTitle} numberOfLines={2}>
                            {card.title}
                          </Text>
                        </View> 

                        <View style={styles.priceCardContainer}>
                          <PriceCardHome /* style={styles.priceCard} */ priceText={"R$"} priceNumber={card.price} />
                        </View>

                      </View> 

                    </View>

                  </View> 

                  <View style={styles.line} />
                </View>                   
              ))} 
              
              
            </View>
            
          )}
      
      <View style={styles.buttonContainer}>
        <PrimaryButton onPress={handleBuyButtonPress}>BUY</PrimaryButton>
      </View>
    );
}
