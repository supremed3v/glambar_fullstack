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
import { useForm, Controller } from "react-hook-form";

import React, { useState } from "react";

const Profile = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { error },
  } = useForm();
  const { height } = useWindowDimensions();

  const onUpdateProfilePressed = () => {
    navigation.push("Profile Updated");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <ImageBackground source={image} resizeMode="cover" style={styles.image}>
          <View style={styles.centerItems}>
            <Text style={styles.text}>Update Profile</Text>

            <CustomInput
              placeholder="First Name"
                name="first name"
                control={control}
            />
            <CustomInput
              placeholder="Last Name"
                name="last name"
                control={control}
            />
            <CustomInput
              placeholder="Contact"
              name="contact"
              control={control}
              keyboardType="number-pad"
            />

            <CustomButton text="Update" onPress={handleSubmit(onUpdateProfilePressed)}  />
          </View>
        </ImageBackground>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
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

export default Profile;
