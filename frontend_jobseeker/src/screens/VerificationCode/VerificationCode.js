import {
  ImageBackground,
  TextInput,
  StyleSheet,
  Text,
  View,
  Alert,
} from "react-native";

import React, { useState } from "react";
import bgSignup from "../../../assets/signup-bg.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useNavigation, useRoute } from "@react-navigation/native";

import { useForm } from "react-hook-form";

import { Auth } from "aws-amplify";

const VerificationCode = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { control, handleSubmit, watch } = useForm({
    defaultValues: { email: route?.params?.email },
  });

  const email = watch("email");
  // verification textfields

  const onVerificationCodePressed = async (data) => {
    try {
      await Auth.confirmSignUp(data.email, data.code);
      navigation.navigate("Login");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };

  const onResendPress = async () => {
    try {
      await Auth.resendSignUp(email);
      Alert.alert("Success", "Code was resent to your phone number");
    } catch (e) {
      Alert.alert("Ooops", e.message);
    }
  };
  return (
    <ImageBackground source={bgSignup} style={styles.container}>
      <View style={styles.container_center}>
        <Text style={styles.VerificationCodeText}> Confirm your account</Text>
        {/* <Text style={styles.text}>
            Enter your verification code that we sent you through your email.
          </Text> */}
        {/* verification textfields */}
        <CustomInput
          name="email"
          control={control}
          placeholder="Email"
          rules={{
            required: "Email is required to confirm your account",
          }}
        />

        <CustomInput
          name="code"
          control={control}
          placeholder="Enter your confirmation code"
          rules={{
            required: "Confirmation is required",
          }}
        />
        <CustomButton
          text="Confirm"
          onPress={handleSubmit(onVerificationCodePressed)}
        />
        <CustomButton
          text="Resend Code"
          onPress={onResendPress}
          type="SECONDARY"
        />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  VerificationCodeText: {
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

  TextInputView: {
    borderBottomWidth: 2,
    width: 30,
    justifyContent: "center",
    alignItems: "center",
    fontSize: 30,
    marginTop: 40,
    marginLeft: 50,
    marginRight: 20,
    marginEnd: 30,
    marginStart: 20,
  },
  btn: {
    marginTop: 50,
    width: "80%",
    borderRadius: 15,
    padding: 10,
    alignItems: "center",
    marginVertical: 11,
  },
});
export default VerificationCode;
