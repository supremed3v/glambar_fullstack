import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";

import background from "../../../assets/bg.jpeg";

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import { useForm } from "react-hook-form";

const EMAIL_REGEX =
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const SignUpScreen = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { error },
  } = useForm();
 
  const onPrivacyPressed = () => {
    navigation.navigate("TermsandConditions");
  };

  const onSignUpPressed =  (data) => {
    console.log(data);
    navigation.navigate("Home");
  };

  const onSignUpGoogle = () => {
    console.warn("signup with google");
  };

  const onSignIn = () => {
    navigation.goBack();
  };

  return (
    <ImageBackground source={background} style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.container_center}>
          <Text style={styles.heading}>Create an account</Text>
          <CustomInput
            name="name"
            control={control}
            placeholder="Name"
            rules={{
              required: "Name is required",
              minLength: {
                value: 3,
                message: "Name should be at least 3 characters long",
              },
              maxLength: {
                value: 24,
                message: "Name should be max 24 characters long",
              },
            }}
          />
          <CustomInput
            name="email"
            control={control}
            placeholder="Email"
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />
          <CustomInput
            name="phone_number"
            placeholder="Enter your Contact Number (+92xxxxxxxxxx)"
            control={control}
            keyboardType="phone-pad"
            rules={{
              required: "Contact number is required",
              minLength: {
                value: 13,
                message: "Contact number should be 13 numbers long",
              },
            }}
          />
          <CustomInput
            name="address"
            placeholder="Enter Your Address"
            control={control}
            rules={{ required: "Address is required" }}
          />
           <CustomInput
            name="city"
            placeholder="Enter Your City"
            control={control}
            rules={{ required: "City name is required" }}
          />
          <CustomInput
            name="area"
            placeholder="Enter Your Area"
            control={control}
            rules={{ required: "Area is required" }}
          />
          <CustomInput
            name="gender"
            placeholder="Enter your Gender"
            control={control}
            rules={{ required: "Gender is required" }}
          />
          <CustomInput
            name="password"
            control={control}
            placeholder="Password"
            secureTextEntry
            rules={{
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password should be at least 8 characters long",
              },
            }}
          />
          <CustomInput
            name="password-repeat"
            control={control}
            placeholder="Repeat Password"
            secureTextEntry
            rules={{
              
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
            text="Create an account"
            onPress={handleSubmit(onSignUpPressed)}
          />

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
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  heading: {
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
    marginBottom: 100,
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
