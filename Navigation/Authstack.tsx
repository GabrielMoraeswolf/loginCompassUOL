import LoginScreen from '../Screens/LoginScreen/Index';
import SignupScreen from '../Screens/SignUpScreen/Index';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Colors } from '../styles/index';

const Stack = createNativeStackNavigator();

export default function AuthStack() {
    return (
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: Colors.background },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: Colors.background },
        }}
      >
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="SignUp" component={SignupScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    );
  }