import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Authstack'
import { CartProvider } from './CartContext';

export default function Navigation() {
    return (
      <NavigationContainer>
        <CartProvider>
          <AuthStack />         
        </CartProvider>
      </NavigationContainer>
    );
  }