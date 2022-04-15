import { View, Text } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/Home";
const Tab = createBottomTabNavigator();
import Ionicons from "react-native-vector-icons/Ionicons";
import UpcomingAppointment from "../screens/UpcomingAppointment/UpcomingAppointment";
import Profile from "../screens/Profile/Profile";
import AddressDetails from "../screens/AddressDetails/AddressDetails";

const HomeNavigationContainer = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === "HomeNav") {
            iconName = focused ? "home-outline" : "home-outline";
          } else if (route.name === "Appointment") {
            iconName = focused ? "calendar-outline" : "calendar-outline";
          } else if (route.name === "Profile") {
            iconName = focused
              ? "person-circle-outline"
              : "person-circle-outline";
          } else if (route.name === "Logout") {
            iconName = focused ? "exit-outline" : "exit-outline";
          } else if (route.name === "Location") {
            iconName = focused ? "location-outline" : "location-outline";
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "rgb(59, 113, 243)",
        tabBarInactiveTintColor: "gray",
      })}
    >
      <Tab.Screen
        options={{ headerShown: false }}
        name="HomeNav"
        component={Home}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Appointment"
        component={UpcomingAppointment}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Profile"
        component={Profile}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Location"
        component={AddressDetails}
      />
      <Tab.Screen
        options={{ headerShown: false }}
        name="Logout"
        component={Home}
      />
    </Tab.Navigator>
  );
};

export default HomeNavigationContainer;