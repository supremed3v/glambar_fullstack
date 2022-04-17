import "react-native-gesture-handler";

import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";

import {
  SignInScreen, SignUpScreen, AddJob, Service, BabyCare, Bleach, Facial,
  HairColor, HairCutting, HairStyling, HairTreatment,
  Makeup, Manicure, Massage, Pedicure, AddPackage, Scrub, Threading, Waxing,
  CustomerRequest, ForgotPassword, JobSeekerRecruited, ManageStaff,
  SalonDetails, SalonHome, UpdatePassword, VerificationCode, Appointment, LandingPage
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
        initialRouteName="UpdatePassword"
      >
        <Stack.Screen name="Login" component={SignInScreen} />
        <Stack.Screen name="Signup" component={SignUpScreen} />
        <Stack.Screen name="Appointment" component={Appointment} />
        <Stack.Screen name="AddPackage" component={AddPackage} />
        <Stack.Screen name="AddJob" component={AddJob} />
        <Stack.Screen name="Service" component={Service} />
        <Stack.Screen name="BabyCare" component={BabyCare} />
        <Stack.Screen name="Bleach" component={Bleach} />
        <Stack.Screen name="Facial" component={Facial} />
        <Stack.Screen name="HairColor" component={HairColor} />
        <Stack.Screen name="HairCutting" component={HairCutting} />
        <Stack.Screen name="HairStyling" component={HairStyling} />
        <Stack.Screen name="HairTreatment" component={HairTreatment} />
        <Stack.Screen name="Makeup" component={Makeup} />
        <Stack.Screen name="Manicure" component={Manicure} />
        <Stack.Screen name="Massage" component={Massage} />
        <Stack.Screen name="Pedicure" component={Pedicure} />
        <Stack.Screen name="Scrub" component={Scrub} />
        <Stack.Screen name="Threading" component={Threading} />
        <Stack.Screen name="Waxing" component={Waxing} />
        <Stack.Screen name="CustomerRequest" component={CustomerRequest} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="JobSeekerRecruited" component={JobSeekerRecruited} />
        <Stack.Screen name="ManageStaff" component={ManageStaff} />
        <Stack.Screen name="SalonHome" component={SalonHome} />
        <Stack.Screen name="UpdatePassword" component={UpdatePassword} />
        <Stack.Screen name="VerificationCode" component={VerificationCode} />
        <Stack.Screen name="LandingPage" component={LandingPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
