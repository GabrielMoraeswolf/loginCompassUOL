import { ScrollView, View, Text,Image } from "react-native";
import styles from "./Styles";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
<<<<<<< HEAD
import { CartContext } from "../../Navigation/CartContext";
import { useContext } from "react";

function CartScreen() {
  const { cartItems } = useContext(CartContext); // Obtenha a lista de itens do carrinho do contexto

  return (
    <ScrollView style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.totalText}>TOTAL</Text>
        <View style={styles.priceContainer}>
          <Text style={styles.priceText}>R$</Text>
          <Text style={styles.priceText}>0.00</Text>
        </View>
      </View>
      {cartItems.map((item, index) => (
        <View key={index}>
          {/* Renderize os detalhes do item do carrinho */}
          <Text>{item.title}</Text> {/* Renderize o título do produto */}
        </View>
      ))}
      <View style={styles.line} />
      <View style={styles.buttonContainer}>
        <PrimaryButton>BUY</PrimaryButton>
      </View>
    </ScrollView>
  );
}

export default CartScreen;
=======
import { CartContext } from "../../Components/Context/CartContext";
import React, {  useContext } from "react";

export const CartScreen = () => {
    const cartContext = useContext(CartContext);
    return(
        <ScrollView style ={styles.container}>
            <View style ={styles.textContainer}>
               <Text style ={styles.totalText}>TOTAL</Text>
               <View style ={styles.priceContainer}>
                    <Text style ={styles.priceText}>R$</Text>
                    <Text style ={styles.priceText}>0.00</Text>
               </View>
            </View>
            <View>
                 {/* Renderizar os cards selecionados */}
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
          </View>
          <View style={styles.line} />
        </View>
      ))}
            </View>
            <View style ={styles.buttonContainer}>
                <PrimaryButton>BUY</PrimaryButton>
            </View>
        </ScrollView>
    );
}

>>>>>>> development
