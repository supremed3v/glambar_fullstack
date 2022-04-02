
import {
  StyleSheet,
  View,
} from "react-native";

import React from "react";

import SignInScreen from "./src/screens/SignInScreen"
import ForgotPassword from "./src/screens/ForgotPassword/ForgotPassword";
import TermsandConditions from "./src/screens/TermsandConditions/TermsandConditions";
import SignupScreen from "./src/screens/SignupScreen/SignUpScreen";
import ClientDetails from "./src/screens/ClientDetails/ClientDetails";
import Home from './src/screens/Home'
import SalonScreen from './src/screens/SalonScreen'
import SalonServices from "./src/screens/SalonScreen/SalonServices"
import NewPassword from "./src/screens/NewPassword/NewPassword"
export default function App() {
  return ( 
    <View style={styles.container}>
      <SignInScreen />
      {/* <ForgotPassword/>  */}
      {/* <SignupScreen/> */}
      {/* <TermsandConditions/> */}
      {/* <ClientDetails/> */}
      {/* <Home/>  */}
      {/* <SalonScreen/> */}
      {/* <SalonServices/> */}
      {/* <NewPassword/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
