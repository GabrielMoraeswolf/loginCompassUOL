import LoginScreen from '../Screens/LoginScreen';
import SignupScreen from '../Screens/SignUpScreen';
import ProductScreen from '../Screens/ProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../styles/index';
import BottomTab from './BottomTab';

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
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="ProductScreen" component={ProductScreen}/>
        <Stack.Screen name="Home" component={BottomTab} />
       {/** <Stack.Screen name="Cart" component={BottomTab}/> */}
      </Stack.Navigator>
    );
  }