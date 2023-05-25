import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../Screens/HomeScreen/Index";
import { Colors } from "../styles";
import { View, Image, Text } from "react-native";
import CartScreen from "../Screens/CartScreen/Index";

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: Colors.tabBarColor,
          height: 70,
          justifyContent: "space-between",
          borderTopWidth: 0,
          //paddingHorizontal: 10,
        },
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ marginRight: 55 }}>
              <Image
                source={require("../assets/home-icon-white.png")}
                resizeMode="contain"
                style={{
                  width: 27,
                  height: 26,
                  tintColor: focused ? Colors.primary : Colors.cardTitle,
                }}
              />
              <Text
                style={{
                  fontSize: 9,
                  color: focused ? Colors.primary : Colors.cardTitle,
                  marginTop: 3,
                }}
              >
                HOME
              </Text>
            </View>
          ),
        }}
      />

      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={{ marginLeft: 55 }}>
              <Image
                source={require("../assets/basket-icon-white.png")}
                resizeMode="contain"
                style={{
                  width: 27,
                  height: 26,
                  tintColor: focused ? Colors.primary : Colors.cardTitle,
                }}
              />
              <Text
                style={{
                  fontSize: 9,
                  color: focused ? Colors.primary : Colors.cardTitle,
                  marginTop: 3,
                }}
              >
                CART
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;
