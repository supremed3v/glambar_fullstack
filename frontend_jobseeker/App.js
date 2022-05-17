import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import {
 LandingPage, SignInScreen,SignUpScreen, ForgotPassword, NewPassword, AboutUs,VerificationCode
} from "./src/screens";

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
        initialRouteName="LandingPage"
      >
        <Stack.Screen name="Login" component={SignInScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
            <Stack.Screen name="NewPassword" component={NewPassword} />
            <Stack.Screen name="VerificationCode" component={VerificationCode}/>
            <Stack.Screen name="LandingPage" component={LandingPage} />
            <Stack.Screen name="AboutUs" component={AboutUs} />
            
      </Stack.Navigator>
    </NavigationContainer>
  );
}
