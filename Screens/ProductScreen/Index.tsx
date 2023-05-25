import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { PriceCard } from "../../Components/PriceCard/PriceCard";
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
        <Text style={styles.productTitle}>{title}
        <FavoriteButton />
        </Text>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <Text style={styles.productTitle}>{description}</Text>
        <View style={styles.priceAndFavoriteContainer}>
          <PriceCard priceText={"R$"} priceNumber={price} />
        </View>
        <PrimaryButton onPress={handleCartButtonPress}>ADD TO CART</PrimaryButton>
      </View>
    </View>
    );
};
export default ProductScreen;