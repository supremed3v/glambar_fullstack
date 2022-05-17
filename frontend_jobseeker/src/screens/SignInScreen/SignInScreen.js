import {
  ImageBackground,
<<<<<<< HEAD
=======
  TextInput,
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
<<<<<<< HEAD
  Alert,
} from "react-native";
import React, { useState } from "react";
=======
  ScrollView,
} from "react-native";
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576

import background from "../../../assets/bg.jpeg";
import logo from "../../../assets/logo.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

import { useForm } from "react-hook-form";

const SignInScreen = ({ navigation }) => {
<<<<<<< HEAD

=======
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576
  const {
    control,
    handleSubmit,
    formState: { error },
  } = useForm();

  const { height } = useWindowDimensions();

<<<<<<< HEAD
  const onSignInPressed =  (data) => {
    console.log(data);
    navigation.navigate("Home");
  };
    
=======
  const onSignInPressed = (data) => {
    console.log(data);
    navigation.navigate("Home");
  };
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576

  const onForgotPasswordPressed = () => {
    navigation.push("ForgotPassword");
  };

  const onSignInFacebook = () => {
    console.log("Hello FB");
  };

  const onSignInGoogle = () => {
    console.log("Hello Google");
  };

  const onCreateAnAccount = () => {
    navigation.navigate("SignUpScreen");
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.container}
      >
        <View style={styles.container_center}>
          <Image
            source={logo}
            style={[
              styles.logo,
              { height: height * 0.15 },
              { width: "30%" },
              { marginBottom: 30 },
              { marginTop: 30 },
            ]}
          />
          <Text style={styles.heading}>Login or Register to get started</Text>

          <CustomInput
            name="email"
            placeholder="Enter your email"
            control={control}
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />
          <CustomInput
            placeholder="Password"
            secureTextEntry
            control={control}
            name="password"
            rules={{
              required: "Password is required",
              minLength: {
                value: 5,
                message: "Password should be minimum 5 characters long",
              },
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

          <CustomButton
            text="Sign In With Google"
            onPress={onSignInGoogle}
            bgColor="#FAE9EA"
            fgColor="#DD4D44"
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
  heading: {
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