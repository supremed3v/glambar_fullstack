import { ImageBackground, StyleSheet, Text, View } from "react-native";
import axios from "axios";

import background from "../../../assets/bg.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import React from "react";

import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignUpScreen = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm();

  const pwd = watch("password");
  const onPrivacyPressed = () => {
    navigation.navigate("TermsandConditions");
  };

  const onSignUpPressed = (data) => {
    console.log(data)
    navigation.navigate("SalonHome");
  };

    // try {
    //   const reponse = await axios.post(
    //     "http://10.0.2.2:5000/api/manager/register",
    //     {
    //       salonName,
    //       email,
    //       password,
    //       contactNumber,
    //       address,
    //     }
    //   );
    //   if (reponse.status === 201) {
    //     alert(` You have created: ${JSON.stringify(reponse.data)}`);
    //   } else {
    //     throw new Error(console.log(Error));
    //   }
    // } catch (err) {
    //   console.log(err.message);
    // }

  const onSignIn = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      <View style={styles.container_center}>
        <Text style={styles.SignupText}>Register Your Salon!</Text>
        <CustomInput
          name="salonName"
          placeholder="Enter your Salon Name"
          control={control}
          rules={{ required: "Salon name is required" }}
        />
        <CustomInput
          name="email"
          placeholder="Enter your Email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <CustomInput
          name="contactNumber"
          placeholder="Enter your Contact Number"
          control={control}
          keyboardType={"phone-pad"}
          rules={{
            required: "Contact number is required",
            minLength: {
              value: 12,
              message: "Contact number should be 12 numbers long",
            },
          }}
        />
        <CustomInput
          name="address"
          placeholder="Enter your Salon Address"
          control={control}
          rules={{ required: "Address is required" }}
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

        <CustomInput
          name="confirm-password"
          placeholder="Password"
          secureTextEntry={true}
          control={control}
          rules={{
            validate: (value) => value === pwd || "Password do not match",
          }}
        />

        <Text style={styles.text}>
          I read and agree to the{" "}
          <Text onPress={onPrivacyPressed} style={styles.button}>
            Terms and Conditions
          </Text>
          .
        </Text>
        <CustomButton
          text="Register Your Salon"
          onPress={handleSubmit(onSignUpPressed)}
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
    marginTop: 55,
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
    marginTop: 5,
    color: "#827676",
  },
});
export default SignUpScreen;
