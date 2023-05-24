import { ScrollView, View, Text, Image } from "react-native";
import styles from "./Styles";
import { PriceCard } from "../../Components/PriceCard/PriceCard";
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";

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

function CartScreen() {
    return(
        <ScrollView style ={styles.container}>
            <View>
              
            </View>
        </ScrollView>
    );
}

export default CartScreen;