import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './Authstack'
export default function Navigation() {
    return (
      <NavigationContainer>
        <AuthStack />
      </NavigationContainer>
    );
  }