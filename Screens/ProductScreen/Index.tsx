import { View, Text, Image, StyleSheet } from "react-native";
import { PriceCard } from "../../Components/PriceCard/PriceCard";
import StarsIcon from "../../Components/StarsIcon/StarsIcon"
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";
import styles from "./Styles";

const ProductScreen = ({ route }: { route: any }) => {
  const { title, price, image, description } = route.params;
  return (
    <View style={styles.container}>
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