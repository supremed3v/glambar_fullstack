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

import image from "../../../assets/bg-screen.jpg";
import logo from "../../../assets/logo-white.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import React, { useState } from "react";
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
    navigation.push("SalonHome");
  };
  

  const onForgotPasswordPressed = () => {
    navigation.push("ForgotPassword");
  };

  const onCreateAnAccount = () => {
    navigation.navigate("Signup");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.centerLogo}>
            <Image
              source={logo}
              style={[styles.logo, { height: height * 0.3 }]}
            />
          </View>
          <View style={styles.centerItems}>
            <Text style={styles.heading}>Welcome to Manager Dashboard</Text>
            <Text style={styles.text}>Login or Register to get started.</Text>

            <CustomInput
              name="email"
              placeholder="Enter your email"
              control={control}
              rules={{ required: "Email is required" }}
            />
            <CustomInput
              name="password"
              placeholder="Password"
              secureTextEntry={true}
              control={control}
              rules={{
                required: "Password is required",
                minLength: {
                  value: 7,
                  message: "Password should be 7 characters long",
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
            <View style={{ marginTop: 48 }}>
              <CustomButton
                text="Don't have an account? Create one."
                onPress={onCreateAnAccount}
                type="SECONDARY"
              />
            </View>
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    height: "100%",
    flex: 1,
  },
  image: {
    flex: 1,
  },
  centerLogo: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  centerItems: {
    marginBottom: 10,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    width: 250,
    marginBottom: 30,
  },
  logo: {
    width: "50%",
    maxHeight: 180,
    display: "flex",
    zIndex: 2,
    maxWidth: 500,
  },
  heading: {
    marginBottom: 10,
    fontSize: 30,
    width: "80%",
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    borderBottomWidth: 2,
    borderColor: "#fff",
    paddingBottom: 10,
  },
});

export default SignInScreen;
