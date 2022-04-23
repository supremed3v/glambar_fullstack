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
          <View style={styles.pickerView}>
              <Text style={styles.pickerText}>City</Text>
              <Picker style={styles.picker} onValueChange={(data) => console.log(data)} >
                <Picker.Item label="Select" />
                <Picker.Item label="Islamabad" value="Islamabad" />
                <Picker.Item label="Rawalpindi" value="Rawalpindi" />
              </Picker>
            </View>
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
export default AddJob;
