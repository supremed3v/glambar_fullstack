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
import { Picker } from "@react-native-picker/picker";

const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ManageStaff = ({ navigation }) => {
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
          <Text style={styles.heading}>Manage Staff</Text>
          <CustomInput
            name="name"
            placeholder="Enter Staff Member Name"
            control={control}
            rules={{ required: "Staff member name is required" }}
          />
          <CustomInput
            name="contactNumber"
            placeholder="Enter Contact Number"
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
            name="age"
            placeholder="Enter Age"
            control={control}
            keyboardType={"numeric"}
            rules={{ required: "Age is required" }}
          />
          <View style={styles.pickerView}>
              <Text style={styles.pickerText}>Gender</Text>
              <Picker style={styles.picker} onValueChange={(data) => console.log(data)} >
                <Picker.Item label="Select" />
                <Picker.Item label="Male" value="Male" />
                <Picker.Item label="Female" value="Female" />
              </Picker>
            </View>
          <CustomInput
            name="cnic"
            placeholder="Enter CNIC"
            control={control}
            keyboardType={"numeric"}
            rules={{
              required: "CNIC is required",
              minLength: {
                value: 13,
                message: "CNIC should be 13 digits long",
              },
            }}
          />
          <CustomInput
            name="email"
            placeholder="Enter Your Email Address"
            control={control}
            rules={{
              required: "Email is required",
              pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
            }}
          />
          <CustomInput
            name="designation"
            placeholder="Enter Designation"
            control={control}
            rules={{ required: "Designation is required" }}
          />
          <CustomInput
            name="experience"
            placeholder="Enter Experience"
            control={control}
            rules={{ required: "Experience is required" }}
          />

          <CustomButton text="Submit" onPress={handleSubmit(onSave)} />
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
    marginRight: 160,
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
  pickerView: {
    flexDirection: "row",
    margin: 5,
    height: 52,
  },
  pickerText: {
    fontSize: 14,
    color: "gray",
    alignItems: "center",
    marginTop: 15,
    marginBottom: 15,
    marginStart: 20,
  },
  picker: {
    width: 200,
    height: 30,
    backgroundColor: "#f0f1f2",
    borderWidth: 5,
    marginStart: 50
  }
});
export default ManageStaff;
