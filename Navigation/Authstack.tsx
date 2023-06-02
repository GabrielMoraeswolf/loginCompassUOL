import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../styles/index';
import BottomTab from './BottomTab';
import LoginScreen from '../src/Screens/LoginScreen';
import ProductScreen from '../src/Screens/ProductScreen';
import SignUpScreen from '../src/Screens/SignUpScreen';

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