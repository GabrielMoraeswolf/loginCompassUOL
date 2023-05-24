import { View, Text, Image, StyleSheet } from "react-native";
import { PriceCard } from "../../Components/PriceCard/PriceCard";
import FavoriteButton from "../../Components/FavoriteButton/FavoriteButton";
import styles from "./Styles";
import BackButton from "../../Components/BackButton/BackButton";
import { NavProps } from "../../types/navigation";



const ProductScreen = ({ route }: { route: any }, {navigation}: NavProps) => {
  const { title, price, image } = route.params;
  
  const handleBackHome = () => {
    navigation.navigate('Home');
  }

  return (
    <View style={styles.container}>
      <View style={styles.backButton}>
        <BackButton onPress={handleBackHome }/>
      </View>
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