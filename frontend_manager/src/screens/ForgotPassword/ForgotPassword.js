import {
  ImageBackground,
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView,
} from "react-native";

import React from "react";
import { useForm } from "react-hook-form";
import background from "../../../assets/bg.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { height } = useWindowDimensions();

  const onForgotPasswordPressed = (data) => {
    console.log(data);
  };
  const onLogInPressed = () => {
    navigation.navigate("Login");
  };
  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.container_center}>
        <Text style={styles.ForgotPasswordText}>Forgot Your Password?</Text>
        <Text style={styles.text}>
          Enter your email address and we'll send you instructions to reset your
          password.
        </Text>
        <CustomInput
          name="email"
          placeholder="Enter Your Email Address"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <CustomButton
          text="Send Reset Link"
          onPress={handleSubmit(onForgotPasswordPressed)}
        />
        <Text style={styles.logInText}>
          Back to{" "}
          <Text onPress={onLogInPressed} style={styles.button}>
            Login
          </Text>
        </Text>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  ForgotPasswordText: {
    marginTop: 60,
    fontSize: 26,
    fontWeight: "bold",
    color: "#5085E1",
  },
  container: {
    flex: 1,
  },
  text: {
    marginTop: 15,
    textAlign: "center",
    paddingLeft: 10,
    paddingRight: 10,
    color: "#827676",
    fontWeight: "normal",
    marginBottom: 10,
  },
  container_center: {
    alignItems: "center",
    marginTop: 30,
  },

  button: {
    color: "#5085E1",
  },
  signInText: {
    marginTop: 150,
    color: "#827676",
  },
});
export default ForgotPassword;
