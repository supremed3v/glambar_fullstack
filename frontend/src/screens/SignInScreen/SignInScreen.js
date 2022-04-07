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

import image from "../../../assets/bg-screen.jpg";
import logo from "../../../assets/logo-white.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import React, { useState } from "react";

const SignInScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    navigation.navigate("Home");
  };

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
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.centerItems}>
            <Image
              source={logo}
              style={[styles.logo, { height: height * 0.3 }]}
            />
          </View>
          <View style={styles.centerItems}>
            <Text style={styles.text}>Login or Signup to get started.</Text>

            <CustomInput
              placeholder="Username"
              value={username}
              setValue={setUsername}
            />
            <CustomInput
              placeholder="Firstname"
              value={username}
              setValue={setUsername}
            />
            <CustomInput
              placeholder="Password"
              value={password}
              setValue={setPassword}
              secureTextEntry={true}
            />

            <CustomButton text="Sign In" onPress={onSignInPressed} />

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

            <CustomButton
              text="Sign In Facebook"
              onPress={onSignInFacebook}
              bgColor="#e7eaf4"
              fgColor="#4765a9"
            />

            <CustomButton
              text="Don't have an account? Create one."
              onPress={onCreateAnAccount}
              type="SECONDARY"
            />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  centerItems: {
    marginTop: 5,
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
    marginBottom: 10,
  },
  logo: {
    width: "50%",
    maxHeight: 300,
    display: "flex",
    zIndex: 2,
    maxWidth: 500,
  },
});

export default SignInScreen;
