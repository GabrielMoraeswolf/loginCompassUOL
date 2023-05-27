import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type NavParamsList = {
  Home: undefined
  SignUp: undefined
  Login: undefined
  ProductScreen: {id: number,title: string, price: number, image: string, description: string}
  Product: { id: number }
  Cart: undefined
}

export type NavProps = NativeStackScreenProps<NavParamsList, any>
export type ProductNavProps = NativeStackScreenProps<NavParamsList, "Product">

