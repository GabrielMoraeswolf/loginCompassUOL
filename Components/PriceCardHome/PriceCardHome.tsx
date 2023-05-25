import React from "react";
import { View, Text } from "react-native";
import Styles from "./Styles";

interface Props {
  priceText: string;
  priceNumber: number;
}

export const PriceCardHome = ({ priceText, priceNumber }: Props): JSX.Element => {
  return (
    <View style={Styles.priceCard}>
      <Text style={Styles.textPriceCard}>
        {priceText} {priceNumber}
      </Text>
    </View>
  );
};
