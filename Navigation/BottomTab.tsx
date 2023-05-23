import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen';
import SignUpScreen from '../Screens/SignUpScreen/Index';
import { Colors } from '../styles';

const Tab = createBottomTabNavigator();

function BottomTab() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: Colors.tabBarColor,
                }          
            }}   
        >
            <Tab.Screen name="Home" component={HomeScreen}/>
            <Tab.Screen name="SignUp" component={SignUpScreen} /> 
        </Tab.Navigator>   
    );
  }

 export default BottomTab;
 