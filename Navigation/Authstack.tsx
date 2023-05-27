import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../styles/index';
import BottomTab from './BottomTab';
import LoginScreen from '../Screens/LoginScreen/Index';
import ProductScreen from '../Screens/ProductScreen/Index';
import SignUpScreen from '../Screens/SignUpScreen';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          contentStyle: { backgroundColor: Colors.background },
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignUpScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen}/>
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator>
    );
  }