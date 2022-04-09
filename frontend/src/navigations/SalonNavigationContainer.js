import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import SalonServices from "../screens/SalonScreen/SalonServices/SalonServices";
const Tab = createBottomTabNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";

const SalonNavigationContainer = ({ navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "About") {
            iconName = focused ? "home-outline" : "home-outline";
          } else if (route.name === "Services") {
            iconName = focused ? "calendar-outline" : "calendar-outline";
          } else if (route.name === "Packages") {
            iconName = focused
              ? "person-circle-outline"
              : "person-circle-outline";
          } else if (route.name === "Reviews") {
            iconName = focused ? "exit-outline" : "exit-outline";
          } 
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "rgb(59, 113, 243)",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="About"
        component={SalonServices}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Services"
        component={SalonServices}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Packages"
        component={SalonServices}
      />
    
      <Tab.Screen
        options={{ headerShown: false }}
        name="Reviews"
        component={SalonServices}
      />
    </Tab.Navigator>
  );
};

export default SalonNavigationContainer;
