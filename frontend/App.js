import { StyleSheet, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import React from "react";

import SignInScreen from "./src/screens/SignInScreen";
import ForgotPassword from "./src/screens/ForgotPassword/ForgotPassword";
import TermsandConditions from "./src/screens/TermsandConditions/TermsandConditions";
import SignUpScreen from "./src/screens/SignupScreen/SignUpScreen";
import ClientDetails from "./src/screens/ClientDetails/ClientDetails";
import Home from "./src/screens/Home";
import SalonScreen from "./src/screens/SalonScreen";
import SalonServices from "./src/screens/SalonScreen/SalonServices";
import NewPassword from "./src/screens/NewPassword/NewPassword";
import Profile from "./src/screens/Profile/Profile";

const Stack = createStackNavigator();

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "transparent",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}
        initialRouteName="Login"
      >
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="TermsandConditions"
          component={TermsandConditions}
        />
        <Stack.Screen name="Profile" component={Profile}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ClientDetails" component={ClientDetails} />
        <Stack.Screen name="SalonScreen" component={SalonScreen} />
        <Stack.Screen name="SalonServices" component={SalonServices} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
