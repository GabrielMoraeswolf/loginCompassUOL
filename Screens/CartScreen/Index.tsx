import { ScrollView, View, Text, Image,Button } from "react-native";
import styles from "./Styles";
import ProductScreen from "../ProductScreen/Index"
import { PriceCard } from "../../Components/PriceCard/PriceCard";


const CartScreen = ({ route }: { route: any }) => {
    const { title, price, image } = route.params;
    
    return(
        <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.productTitle}>
          {title}
        </Text>
        <Image source={{ uri: image }} style={styles.cardImage} />
        <View style={styles.priceAndFavoriteContainer}>
          <PriceCard priceText={"R$"} priceNumber={price} />
        </View>
      </View>
      
    </View>
    );
}

export default CartScreen;