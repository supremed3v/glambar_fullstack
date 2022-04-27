import { StyleSheet, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import React from "react";

import SignInScreen from "./src/screens/SignInScreen";
import ForgotPassword from "./src/screens/ForgotPassword/ForgotPassword";
import TermsandConditions from "./src/screens/TermsandConditions/TermsandConditions";
import SignUpScreen from "./src/screens/SignupScreen/SignUpScreen";
import ClientDetails from "./src/screens/ClientDetails/ClientDetails";
import Home from "./src/screens/Home";
import SalonScreen from "./src/screens/SalonScreen";
import SalonServices2 from "./src/screens/SalonScreen/SalonServices";
import NewPassword from "./src/screens/NewPassword/NewPassword";
import VerificationCode from "./src/screens/VerificationCode/VerificationCode";
import HomeNavigationContainer from "./src/navigations/HomeNavigationContainer";
import SalonNavigationContainer from "./src/navigations/SalonNavigationContainer";
import AddressDetails from "./src/screens/AddressDetails/AddressDetails";
import AddAddress from "./src/screens/AddAddress/AddAddress";
import AboutUs from "./src/screens/AboutUs/AboutUs";
import UpcomingAppointment from "./src/screens/UpcomingAppointment/UpcomingAppointment";
import PassedAppointment from "./src/screens/PassedAppointment/PassedAppointment";
import Complain from "./src/screens/Complain/Complain";
import Rate from "./src/screens/Rate/Rate";
import Packages from "./src/screens/Packages/Packages";
import Reviews from "./src/screens/Reviews/Reviews";
import LandingPage from "./src/screens/LandingPage/LandingPage";

// Import Amplify
import { Amplify } from "aws-amplify";
// Configure Amplify
import awsconfig from "./src/aws-exports";
Amplify.configure(awsconfig);

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
        initialRouteName="LandingPage"
      >
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen
          name="SalonServices"
          component={SalonNavigationContainer}
        />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen
          name="TermsandConditions"
          component={TermsandConditions}
        />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen name="ClientDetails" component={ClientDetails} />
        <Stack.Screen name="SalonScreen" component={SalonScreen} />
        <Stack.Screen name="NewPassword" component={NewPassword} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="AddAddress" component={AddAddress} />
        <Stack.Screen name="AddressDetails" component={AddressDetails} />
        <Stack.Screen name="AboutUs" component={AboutUs} />
        <Stack.Screen name="Packages" component={Packages} />
        <Stack.Screen name="Reviews" component={Reviews} />
        <Stack.Screen
          name="UpcomingAppointment"
          component={UpcomingAppointment}
        />
        <Stack.Screen name="PassedAppointment" component={PassedAppointment} />
        <Stack.Screen name="Complain" component={Complain} />
        <Stack.Screen name="Rate" component={Rate} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
        <Stack.Screen name="Home" component={HomeNavigationContainer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
