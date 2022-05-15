import { StyleSheet, ActivityIndicator, View } from "react-native";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import React, { useEffect, useState } from "react";

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
<<<<<<< HEAD
import SalonDetailsPage from './src/screens/SalonDetailsScreen'
import ServiceDetailScreen from './src/screens/ServiceDetailScreen'
import Cart from './src/screens/Cart'
=======
import ReviewDateTime from "./src/screens/ReviewDateTime/ReviewDateTime";
import Cart from "./src/screens/Cart/Cart";
>>>>>>> ffaaa7e0c78a482d983a5f9d0ca6910fd86ec5e0



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
        initialRouteName="Cart"
      >
<<<<<<< HEAD
        {!user ? (
          <>
          
          <Stack.Screen name="SalonDetailsPage" component={SalonDetailsPage} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="ServiceDetailScreen" component={ServiceDetailScreen} />
=======
>>>>>>> ffaaa7e0c78a482d983a5f9d0ca6910fd86ec5e0
            <Stack.Screen name="Login" component={SignInScreen} />
            <Stack.Screen name="SalonServices" component={SalonNavigationContainer}/>
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="VerificationCode" component={VerificationCode}/>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="TermsandConditions" component={TermsandConditions}/>
            <Stack.Screen name="Home" component={HomeNavigationContainer} />
            <Stack.Screen name="ClientDetails" component={ClientDetails} />
            <Stack.Screen name="SalonScreen" component={SalonScreen} />
            <Stack.Screen name="AddAddress" component={AddAddress} />
            <Stack.Screen name="AddressDetails" component={AddressDetails} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
            <Stack.Screen name="Packages" component={Packages} />
            <Stack.Screen name="Reviews" component={Reviews} />
<<<<<<< HEAD
            <Stack.Screen name="SalonDetailsPage" component={SalonDetailsPage} />
            <Stack.Screen
              name="UpcomingAppointment"
              component={UpcomingAppointment}
            />
            <Stack.Screen
              name="PassedAppointment"
              component={PassedAppointment}
            />
=======
            <Stack.Screen name="UpcomingAppointment" component={UpcomingAppointment}/>
            <Stack.Screen name="PassedAppointment" component={PassedAppointment}/>
>>>>>>> ffaaa7e0c78a482d983a5f9d0ca6910fd86ec5e0
            <Stack.Screen name="Complain" component={Complain} />
            <Stack.Screen name="Rate" component={Rate} />
            <Stack.Screen name="ReviewDateTime" component={ReviewDateTime} />
            <Stack.Screen name="Cart" component={Cart} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
