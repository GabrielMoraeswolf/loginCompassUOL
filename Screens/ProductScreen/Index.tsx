import { View, Text, Image, StyleSheet } from "react-native";
import { PriceCard } from "../../Components/PriceCard/PriceCard";
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";
import styles from "./Styles";

const ProductScreen = ({ route }: { route: any }) => {
  const { title, price, image } = route.params;
  
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.productTitle}>{title}
        <FavoriteButton />
        </Text>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <View style={styles.priceAndFavoriteContainer}>
          <PriceCard priceText={"R$"} priceNumber={price} />
          
        </View>
      </View>
    </View>
    );
};
export default ProductScreen;