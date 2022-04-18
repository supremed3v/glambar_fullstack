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
import Ionicons from "@expo/vector-icons/Ionicons";
import background from "../../../assets/bg.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

const AddJob = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const post = (data) => {
    console.log(data);
    Alert.alert("", "Submitted Successfully");
  };
  const onBackPress = () => {
    // set route
    navigation.push("SalonHome");
  };

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
          <Text style={styles.heading}>Add Job</Text>

          <CustomInput
            name="salonName"
            placeholder="Enter your Salon Name"
            control={control}
            rules={{ required: "Salon name is required" }}
          />
          <CustomInput
            name="city"
            placeholder="Enter City Name"
            control={control}
            rules={{ required: "City Name is required" }}
          />
          <CustomInput
            name="address"
            placeholder="Enter your Salon Address"
            control={control}
            rules={{ required: "Address is required" }}
          />
          <CustomInput
            name="requiredStaff"
            placeholder="Enter Required Position"
            control={control}
            rules={{ required: "Mention Required position" }}
          />
          <CustomInput
            name="description"
            placeholder="Enter Job Description"
            control={control}
            rules={{ required: "Job Description is required" }}
          />
          <CustomInput
            name="experience"
            placeholder="Enter experience required."
            keyboardType={"numeric"}
            control={control}
            rules={{ required: "Experience is required" }}
          />
          <CustomInput
            name="Salary"
            placeholder="Enter salary you are offering for the position."
            keyboardType={"numeric"}
            control={control}
            rules={{ required: "Salaray is required" }}
          />
          <CustomButton text="Post Job" onPress={handleSubmit(post)} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#5085E1",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: "#A2BCED",
    paddingBottom: 10,
    marginRight: 200,
  },
  container: {
    flex: 1,
  },
  container_center: {
    alignItems: "center",
    marginTop: 40,
  },
  backIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
});
export default AddJob;
