import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
  TextInput,
} from "react-native";

import background from "../../../assets/bg.jpeg";
import logo from "../../../assets/logo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

import { useForm } from "react-hook-form";

const SignInScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { height } = useWindowDimensions();

  const onSignInPressed = (data) => {
    console.log(data)
    navigation.navigate("SalonHome");
  };
  

  const onForgotPasswordPressed = () => {
    navigation.push("ForgotPassword");
  };

  const onCreateAnAccount = () => {
    navigation.navigate("Signup");
  };
  return (
      <View style={styles.container}>
        <ImageBackground source={background} resizeMode="cover" style={styles.container}>
          <View style={styles.container_center}>
          <Image
              source={logo}
              style={[styles.logo, { height: height * 0.15 }, {width: "30%"}, {marginBottom: 30}, {marginTop: 30}]}
            />
            <Text style={styles.SignupText}>Login or Register to get started</Text>

            <CustomInput
              name="email"
              placeholder="Enter your email"
              control={control}
              rules= {{
                required: "Email is required",
                pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
              }}
            />
            <CustomInput
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              control={control}
              rules={{
                required: "Password is required"
              }}
            />

            <CustomButton
              text="Sign In"
              onPress={handleSubmit(onSignInPressed)}
            />

            <CustomButton
              text="Forgot Password?"
              onPress={onForgotPasswordPressed}
              type="SECONDARY"
            />
            <Text style={styles.text}>
          Don't have an account?{" "}
          <Text onPress={onCreateAnAccount} style={styles.button}>
            Create one
          </Text>
          .
        </Text>
          </View>
       </ImageBackground>
      </View>
  );
};

const styles = StyleSheet.create({
  SignupText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5085E1",
    marginBottom: 20,
borderBottomWidth: 2,
    borderColor: "#A2BCED",
    paddingBottom: 10,
  },
  container: {
    flex: 1,
  },
  container_center: {
    alignItems: "center",
    marginTop: 50,
  },
  button: {
    color: "#5085E1",
  }, 
  text: {
    marginTop: 20,
    textAlign: "left",
    color: "#827676",
    fontWeight: "normal",
  },
});

export default SignInScreen;
