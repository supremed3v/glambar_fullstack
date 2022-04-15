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

import bgClientDetails from "../../../assets/signup-bg.jpeg";
import {useForm} from 'react-hook-form';
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import React, { useState } from "react";

const SalonDetails = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { height } = useWindowDimensions();

  const onSave = (data) => {
    console.log(data);
  };
  return (
    <ImageBackground source={bgClientDetails} style={styles.container}>
      <View style={styles.container_center}>
        <Text style={styles.ProfileText}>Salon Details</Text>
        <CustomInput
          name="name"
          placeholder="Enter Salon Name"
          control={control}
          rules={{ required: "Salon name is required" }}
        />
        <CustomInput
        name="Contact No #"
          placeholder="Enter Contact No "
          control={control}
          rules={{ required: "Contact No. name is required" }}
          keyboardType="numeric"
        />
        <CustomInput
        name="Address"
          placeholder="Enter Address"
          control={control}
          rules={{ required: "Address is required" }}
        />
        <CustomInput
        name="City"
          placeholder="Enter City"
          control={control}
          rules={{ required: "City is required" }}
        />
        <CustomInput
        name="Gender"
          placeholder="Enter Gender"
          control={control}
          rules={{ required: "Gender is required" }}
        />
        <CustomInput
        name="About"
          placeholder="Enter About"
          control={control}
          rules={{ required: "About is required" }}
        />
        <CustomButton text="Submit" onPress={handleSubmit(onSave)} />
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  ProfileText: {
    marginTop: 60,
    fontSize: 26,
    fontWeight: "bold",
    color: "#5085E1",
    marginBottom: 20,
  },
  container: {
    flex: 1,
  },
  container_center: {
    alignItems: "center",
    marginTop: 30,
  },
});
export default SalonDetails;
