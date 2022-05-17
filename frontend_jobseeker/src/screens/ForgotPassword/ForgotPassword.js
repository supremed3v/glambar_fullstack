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
<<<<<<< HEAD

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword = ({navigation}) => {
=======
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword = ({ navigation }) => {
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

<<<<<<< HEAD
  const onForgotPasswordPressed =  (data) => {
    
=======
  const onForgotPasswordPressed = (data) => {
    console.log(data);
    Alert.alert("", "Link Sent");
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576
  };
  const onLogInPressed = () => {
    navigation.navigate("Login");
  };
<<<<<<< HEAD

  return (
    <ImageBackground source={bgSignup} style={styles.container}>
      <ScrollView>
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
        <Text style={styles.logInText}/>
          Back to{" "}
          <Text onPress={onLogInPressed} style={styles.button}>
            Login
=======
  const onBackPress = () => {
    // set route
    navigation.push("SalonHome");
  };
  return (
    <ImageBackground
      source={background}
      resizeMode="cover"
      style={styles.container}
    >
      <Ionicons
        style={styles.backIcon}
        name="md-chevron-back-circle-sharp"
        onPress={onBackPress}
        size={40}
        color="#5085E1"
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container_center}>
          <Text style={styles.heading}>Forgot your password?</Text>

          <Text style={styles.text}>
            Enter your email address and we'll send you instructions to reset
            your password.
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576
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
<<<<<<< HEAD
=======
          <Text style={styles.logInText}>
            Back to{" "}
            <Text onPress={onLogInPressed} style={styles.button}>
              Login
            </Text>
          </Text>
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576
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
