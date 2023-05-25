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
          <FavoriteButton />
        </View>
        <View style={styles.cardImageContainer}>
          <Image source={{ uri: image }} style={styles.cardImage} />
        </View>

        <View style={styles.starsIconContainer}>
          <StarsIcon />
          <StarsIcon />
          <StarsIcon />
          <StarsIcon />
          <StarsIcon />
        </View>

        <View style={styles.priceAndFavoriteContainer}>
          <PriceCard priceText={"R$"} priceNumber={price} />

        </View>
        <Text style={styles.productDescription}>{description}</Text>

      </View>
    </View>
  );
};
export default ProductScreen;