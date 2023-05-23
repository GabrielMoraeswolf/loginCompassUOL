import React from "react";
import { View, Text } from "react-native";
import Styles from "../../Screens/HomeScreen/Styles";

interface Props {
  priceText: string;
  priceNumber: number;
}

export const PriceCard = ({ priceText, priceNumber }: Props): JSX.Element => {
  return (
    <View style={Styles.priceCard}>
      <Text style={Styles.textPriceCard}>
        {priceText} {priceNumber}
      </Text>
    </View>
  );
};
