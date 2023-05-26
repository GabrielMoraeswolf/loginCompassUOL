import { View, Text, Image, TouchableOpacity, ScrollView } from "react-native";
import { PriceCard } from "../../Components/PriceCard/PriceCard";
import StarsIcon from "../../Components/StarsIcon/StarsIcon"
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import CartButton from "../../Components/CartButton/CartButton";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { QuantityButton } from "../../Components/QuantityButton/QuantityButton";

type IconData = {
  title_: string;
  price_: number;
  image_: string;
};

const ProductScreen = ({ route }: { route: any }) => {
  const { title, price, image, description } = route.params;
  const navigation = useNavigation();
 
  const [productTitle, setProductTitle] = useState(title);
  const [productPrice, setProductPrice] = useState(price);
  const [productImage, setProductImage] = useState(image);
  const [productDescription, setProductDescription] = useState(description);

  useEffect(() => {
    setProductTitle(title);
    setProductPrice(price);
    setProductImage(image);
    setProductDescription(description);
  }, [title, price, image, description]);

  const iconData: IconData = {
    title_: productTitle,
    price_: productPrice,
    image_: productImage,
  };

  const handleBackButtonPress = () => {
    navigation.navigate("Home"); 
  };
  const handleCartButtonPress = () => {
    navigation.navigate("Cart"); 
  };
  const handleCartButtonPressValue = () => {
    navigation.navigate("CartValue", {
      title: iconData.title_,
      price: iconData.price_,
      image: iconData.image_,
    });
  };
 
  return (
    <ScrollView style={styles.container}>
      <View style={styles.otherContainer}>
        <View style={styles.buttonsContainer}>
            <View style={styles.backButton}>
              <TouchableOpacity onPress={handleBackButtonPress}>
                <Image 
                  source={require('../../assets/arrow.png')} 
                  style={styles.arrowButton}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.cartButton}>
              <CartButton onPress={handleCartButtonPress} />
            </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headerCard}>
            <Text style={styles.productTitle}>{productTitle}</Text>
            <View style={styles.favoriteButton}>
              <FavoriteButton size={45}/>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image 
              source={{ uri: productImage }} 
              style={styles.cardImage} 
              resizeMode="contain"
            />
          </View>
          <View style={styles.starsIconContainer}>
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
          </View>
          <View style={styles.priceContainer}>
            <View>
              <PriceCard priceText={"R$"} priceNumber={productPrice} />
            </View>
            <View >
              <QuantityButton />
            </View>
          </View>
          <Text style={styles.productDescription}>{productDescription}</Text>
          <View style={styles.buyButton}>
            <PrimaryButton onPress={handleCartButtonPressValue}>ADD TO CART</PrimaryButton>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default ProductScreen;