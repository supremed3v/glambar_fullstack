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
import { Auth } from "aws-amplify";
=======
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576

const NewPassword = ({ navigation }) => {
  const { control, handleSubmit, watch } = useForm();

  const pwd = watch("password");

<<<<<<< HEAD
  const onSave = async (data) => {
    try {
      await Auth.forgotPasswordSubmit(data.email, data.code, data.password);
      navigation.navigate("SignIn");
    } catch (e) {
      Alert.alert("Oops", e.message);
    }
  };
=======
  const onSave = (data) => {
    console.log(data);
    Alert.alert("", "Link Sent");
  };
  const onBackPress = () => {
    // set route
    navigation.push("SalonHome");
  };

>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576
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
          <Text style={styles.UpdatePasswordText}>Create New Password</Text>
<<<<<<< HEAD

          <CustomInput
            placeholder="Email"
            name="email"
            control={control}
            rules={{ required: "email is required" }}
          />
          <CustomInput
            placeholder="Code"
            name="code"
            control={control}
            rules={{ required: "Code is required" }}
          />

          <CustomInput
=======
          <Text style={styles.text}>
            Your new password must be different from previous used password.
          </Text>
          <CustomInput
            name="previousPassword"
            placeholder="Enter Your Previous Password"
            control={control}
            secureTextEntry={true}
            rules={{ required: "Previous Password is required" }}
          />
          <CustomInput
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576
            name="password"
            placeholder="Password"
            secureTextEntry={true}
            control={control}
            rules={{
              required: "Password is required",
              minLength: {
<<<<<<< HEAD
                value: 8,
                message: "Password should be 8 characters long",
              },
            }}
          />
=======
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
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576
          <CustomButton text="Reset Password" onPress={handleSubmit(onSave)} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  UpdatePasswordText: {
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
export default NewPassword;
