import "react-native-gesture-handler";
import { StyleSheet } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";

import {
  SignInScreen, ForgotPassword, TermsandConditions, SignUpScreen, ClientDetails, Home, SalonScreen, 
NewPassword, VerificationCode, HomeNavigationContainer, 
SalonNavigationContainer, Profile, AddressDetails, AddAddress, AboutUs, 
UpcomingAppointment, PassedAppointment, Complain, Rate, Packages, Reviews
} from "./src";

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

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
        <Stack.Screen name="Home" component={HomeNavigationContainer} />
        <Stack.Screen name="SalonServices" component={SalonNavigationContainer}/>
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="TermsandConditions" component={TermsandConditions}/>
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ClientDetails" component={ClientDetails} />
        <Stack.Screen name="SalonScreen" component={SalonScreen} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="Profile" component={Profile} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="AddressDetails" component={AddressDetails} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Packages" component={Packages}/>
        <Stack.Screen name="Reviews" component={Reviews}/>
        <Stack.Screen name="UpcomingAppointment" component={UpcomingAppointment}/>
        <Stack.Screen name="PassedAppointment" component={PassedAppointment} />
        <Stack.Screen name="Complain" component={Complain} />
        <Stack.Screen name="Rate" component={Rate} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

