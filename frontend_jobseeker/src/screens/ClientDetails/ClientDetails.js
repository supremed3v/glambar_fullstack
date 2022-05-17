import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Alert,
  ScrollView,
} from "react-native";
import Ionicons from "@expo/vector-icons/Ionicons";
import background from "../../../assets/bg.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import React from "react";
import { useForm } from "react-hook-form";

const ClientDetails = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSave = (data) => {
    console.log(data);
    Alert.alert("", "Submitted Successfully");
  };
  const onBackPress = () => {
    // set route
    navigation.push("Home");
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
          <Text style={styles.heading}>Client Details</Text>
          <CustomInput
            name="Name"
            placeholder="Enter your First Name"
            control={control}
            rules={{ required: "First name is required",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters long",
            },
            maxLength: {
              value: 24,
              message: "Name should be max 24 characters long",
            }, }}
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
            name="city"
            placeholder="Enter City"
            control={control}
            rules={{ required: "City is required" }}
          />
          <CustomInput
            name="area"
            placeholder="Enter Area"
            control={control}
            rules={{ required: "Area is required" }}
          />
          <CustomButton text="Save" onPress={handleSubmit(onSave)} />
        </View>
      </ScrollView>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  heading: {
    marginTop: 30,
    fontSize: 26,
    fontWeight: "bold",
    color: "#5085E1",
    marginBottom: 20,
    borderBottomWidth: 2,
    borderColor: "#A2BCED",
    paddingBottom: 10,
    marginRight: 120,
  },
  container: {
    flex: 1,
  },
  container_center: {
    alignItems: "center",
    marginTop: 30,
    marginBottom: 100,
  },
  backIcon: {
    marginTop: 10,
    marginLeft: 10,
  },
});
export default ClientDetails;
