import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type NavParamsList = {
  Home: undefined
  SignUp: undefined
  Login: undefined
  ProductScreen: {title: string, price: number, image: string, description: string}
  Product: { id: number }
  Cart: undefined
  CartValue: {title: string, price: number, image: string,}
}

export type NavProps = NativeStackScreenProps<NavParamsList, any>
export type ProductNavProps = NativeStackScreenProps<NavParamsList, "Product">

