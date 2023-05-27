import { View, Text, Image, TouchableOpacity, ScrollView, Modal } from "react-native";
import { PriceCard } from "../../Components/PriceCard/PriceCard";
import StarsIcon from "../../Components/StarsIcon/StarsIcon"
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect, useContext } from "react";
import CartButton from "../../Components/CartButton/CartButton";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";
import { QuantityButton } from "../../Components/QuantityButton/QuantityButton";
import { CartContext } from "../../Components/Context/CartContext";
import NotificationCard from "../../Components/NotificationCard/NotificationCard";


type IconData = {
  id_: string;
  title_: string;
  price_: number;
  image_: string;
  description_: string;
};

const ProductScreen = ({ route }: { route: any }) => {
  const {id, title, price, image, description } = route.params;
  const navigation = useNavigation();
 
  const [productId, setProductId] = useState(id);
  const [productTitle, setProductTitle] = useState(title);
  const [productPrice, setProductPrice] = useState(price);
  const [productImage, setProductImage] = useState(image);
  const [productDescription, setProductDescription] = useState(description);
  const [showNotification, setShowNotification] = useState(false);
  const [productQuantity, setProductQuantity] = useState(1);

  const generateRandomValue = () => {
    return Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);
  };

  useEffect(() => {
    setProductId(id);
    setProductTitle(title);
    setProductPrice(price);
    setProductImage(image);
    setProductDescription(description);
  }, [id,title, price, image, description]);

  const iconData: IconData = {
    id_: productId,
    title_: productTitle,
    price_: productPrice,
    image_: productImage,
    description_: productDescription
  };

  const cartContext = useContext(CartContext);
  
  const handleBackButtonPress = () => {
    navigation.navigate("Home"); 
  };
  
  const handleCartButtonPress = () => {
    navigation.navigate("Cart"); 
  };

  const handleQuantityChange = (newQuantity: number) => {
    setProductQuantity(newQuantity);
  };

  const handleCartButtonPressValue = () => {
    for (let i = 0; i < productQuantity; i++) {
      cartContext.addCard({
        id: generateRandomValue(),
        title: iconData.title_,
        price: iconData.price_,
        image: iconData.image_,
        description: iconData.description_,
      });
    }
    setShowNotification(true);
  };

  const handleNotificationOkPress = () => {
    setShowNotification(false); // Hides the warning when pressing the "OK" button on the warning
   // navigation.navigate('Cart');
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
              <QuantityButton
                quantity={productQuantity}
                onQuantityChange={handleQuantityChange}
              />
            </View>
          </View>
          <Text style={styles.productDescription}>{productDescription}</Text>
          <View style={styles.buyButton}>
            <PrimaryButton onPress={handleCartButtonPressValue}>ADD TO CART</PrimaryButton>
          </View>
        </View>

        <Modal visible={showNotification} transparent={true} animationType="fade">
          <View style={styles.notificationContainer}>
            <NotificationCard onPress={handleNotificationOkPress}>
            Product added to cart.
            </NotificationCard>
          </View>
        </Modal>
        
      </View>
    </ScrollView>
  );
};
export default ProductScreen;