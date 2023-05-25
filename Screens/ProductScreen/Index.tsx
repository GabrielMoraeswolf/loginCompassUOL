import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { PriceCard } from "../../Components/PriceCard/PriceCard";
import StarsIcon from "../../Components/StarsIcon/StarsIcon"
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";
import styles from "./Styles";
import { useNavigation } from "@react-navigation/native";
import BackButton from "../../Components/BackButton/BackButton";
import CartButton from "../../Components/CartButton/CartButton";
import PrimaryButton from "../../Components/PrimaryButton/PrimaryButton";

const ProductScreen = ({ route }: { route: any }) => {
  const { title, price, image, description } = route.params;
  const navigation = useNavigation();

  const handleBackButtonPress = () => {
    navigation.navigate("Home"); 
  };
  const handleCartButtonPress = () => {
    navigation.navigate("Cart"); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.otherContainer}>

        <View style={styles.buttonsContainer}>
            <View style={styles.backButton}>
              <TouchableOpacity onPress={handleBackButtonPress}>
                <Image source={require('../../assets/arrow.png')} style={styles.arrowButton}/>
              </TouchableOpacity>
            </View>

            <View style={styles.cartButton}>
              <CartButton onPress={handleCartButtonPress} />
            </View>
        </View>

        <View style={styles.card}>
          <View style={styles.headerCard}>
            <Text style={styles.productTitle}>{title}</Text>
            <View style={styles.favoriteButton}>
              <FavoriteButton size={45}/>
            </View>
          </View>
          <View style={styles.imageContainer}>
            <Image source={{ uri: image }} style={styles.cardImage} resizeMode="contain"/>
          </View>
          <View style={styles.starsIconContainer}>
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
            <StarsIcon />
          </View>
          <View style={styles.priceContainer}>
            <PriceCard priceText={"R$"} priceNumber={price} />
          </View>
          <Text style={styles.productDescription}>{description}</Text>
          <View style={styles.buyButton}>
            <PrimaryButton onPress={handleCartButtonPress}>ADD TO CART</PrimaryButton>
          </View>
        </View>
      </View>
    </View>
  );
};
export default ProductScreen;