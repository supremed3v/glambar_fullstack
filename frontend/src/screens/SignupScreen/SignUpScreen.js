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

import bgSignup from "../../../assets/signup-bg.jpeg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import React, { useState } from "react";

const SignUpScreen = ({ navigation }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onPrivacyPressed = () => {
    navigation.navigate("TermsandConditions");
  };

  const onSignUpPressed = () => {
    navigation.navigate("ClientDetails");
  };

  const onSignUpGoogle = () => {
    console.warn("signup with google");
  };

  const onSignIn = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={bgSignup} style={styles.container}>
      <View style={styles.container_center}>
        <Text style={styles.SignupText}>Create an account</Text>
        <CustomInput
          placeholder="Username"
          value={username}
          setValue={setUsername}
        />
        <CustomInput placeholder="Email" value={email} setValue={setEmail} />
        <CustomInput
          placeholder="Password"
          value={password}
          setValue={setPassword}
          secureTextEntry={true}
        />

        <CustomInput
          placeholder="Confirm Password"
          value={confirmPassword}
          setValue={setConfirmPassword}
          secureTextEntry={true}
        />

        <Text style={styles.text}>
          I read and agree to the{" "}
          <Text onPress={onPrivacyPressed} style={styles.button}>
            Terms and Conditions
          </Text>
          .
        </Text>
        <CustomButton text="Create an account" onPress={onSignUpPressed} />

        <CustomButton
          text="Sign Up With Google"
          onPress={onSignUpGoogle}
          bgColor="#FAE9EA"
          fgColor="#DD4D44"
        />
        <Text style={styles.signInText}>
          Already have an account?{" "}
          <Text onPress={onSignIn} style={styles.button}>
            Sign In
          </Text>
          .
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  SignupText: {
    marginTop: 60,
    fontSize: 26,
    fontWeight: "bold",
    color: "#5085E1",
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },

  text: {
    marginTop: 20,
    textAlign: "left",
    color: "#827676",
    fontWeight: "normal",
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
export default SignUpScreen;
