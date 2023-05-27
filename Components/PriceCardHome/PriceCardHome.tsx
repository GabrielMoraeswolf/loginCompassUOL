import React from "react";
import { View, Text, StyleProp, ViewStyle } from "react-native";
import Styles from "./Styles";

interface Props {
  priceText: string;
  priceNumber: number;
  style?: StyleProp<ViewStyle>;
}

export const PriceCardHome = ({ style, priceText, priceNumber }: Props): JSX.Element => {
  return (
    <View style={[Styles.priceCard, style]}>
      <Text style={Styles.textPriceCard}>
        {priceText} {priceNumber}
      </Text>
    </View>
  );
};
