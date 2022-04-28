import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";

import React from "react";
import { useForm } from "react-hook-form";
import background from "../../../assets/bg.jpeg";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { Auth } from "aws-amplify";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

<<<<<<< HEAD
const ForgotPassword = ({navigation}) => {
=======
const ForgotPassword = ({ navigation }) => {
>>>>>>> 08d6cac4395ce025f847ef3802f651e98816bc50
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onForgotPasswordPressed = async (data) => {
    try {
      await Auth.forgotPassword(data.email);
      navigation.navigate("NewPassword");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };
  const onLogInPressed = () => {
    navigation.navigate("Login");
  };

  return (
<<<<<<< HEAD
    <ImageBackground source={bgSignup} style={styles.container}>
      <View style={styles.container_center}>
        <Text onPress={onLogInPressed} style={styles.ForgotPasswordText}>Forgot Your Password?</Text>
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
=======
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.container}
    >
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container_center}>
          <Text style={styles.heading}>Forgot your password?</Text>

          <Text style={styles.text}>
            Enter your email address and we'll send you instructions to reset
            your password.
>>>>>>> 08d6cac4395ce025f847ef3802f651e98816bc50
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
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  heading: {
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
  backIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
});
export default ForgotPassword;
