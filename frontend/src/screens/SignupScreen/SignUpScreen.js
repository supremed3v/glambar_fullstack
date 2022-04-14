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
import { useForm } from "react-hook-form";
const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm();
  const pass = watch("password");
  const onPrivacyPressed = () => {
    navigation.navigate("TermsandConditions");
  };

  const onSignUpPressed = (data) => {
    // fetch("http://10.0.2.2:5000/api/auth/register", {
    //   method: "post",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   body: JSON.stringify({
    //     username,
    //     email,
    //     password,
    //   }),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   })
    //   .catch((error) => console.log(error.message));
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
          name="username"
          placeholder="Username"
          control={control}
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be atleast 3 characters long",
            },
            maxLength: {
              value: 15,
              message: "Name should be max 10 characters",
            },
          }}
        />
        <CustomInput
          placeholder="Email"
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
        <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          rules={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password should be 8 characters long",
            },
          }}
        />

        <CustomInput
          placeholder="Confirm Password"
          secureTextEntry={true}
          name="confirm-password"
          rules={{
            validate: (value) => value === pass || "Password do not match",
          }}
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
