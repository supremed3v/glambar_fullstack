import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";

import cutting from "../../../assets/cutting.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import React from "react";
import { useForm } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";

const HairCutting = ({ navigation }) => {
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
    navigation.push("Service");
  };
  return (
    <>
      <ImageBackground
        source={cutting}
        style={styles.image}
        resizeMode="cover"
      />
      <Ionicons
        style={styles.backIcon}
        name="md-chevron-back-circle-sharp"
        onPress={onBackPress}
        size={40}
        color="white"
      />
      <View style={styles.container}>
        <Text style={styles.title}>Hair Cutting</Text>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.fileds}>
            <CustomInput
              name="label"
              placeholder="Enter Service Name"
              control={control}
              rules={{ required: "Sevice name is required" }}
            />
            <View style={styles.pickerView}>
              <Text style={styles.pickerText}>Length</Text>
              <Picker style={styles.picker} onValueChange={(data) => console.log(data)} >
                <Picker.Item label="Select" />
                <Picker.Item label="Shoulder" value="Shoulder" />
                <Picker.Item label="Armpit" value="Armpit" />
                <Picker.Item label="Elbow" value="Elbow" />
                <Picker.Item label="Waist" value="Waist" />
                <Picker.Item label="Hip" value="Hip" />
                <Picker.Item label="Knee" value="Knee" />
              </Picker>
            </View>
            <CustomInput
              name="description"
              placeholder="Enter Description"
              control={control}
              rules={{ required: "Description is required" }}
            />
            <CustomInput
              name="price"
              placeholder="Enter Price"
              control={control}
              rules={{ required: "Price is required" }}
              keyboardType="numeric"
            />
            <CustomButton
              style={{ marginBottom: 10 }}
              text="Submit"
              onPress={handleSubmit(onSave)}
            />
          </View>
        </ScrollView>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 260,
  },
  title: {
    marginTop: 15,
    marginBottom: 15,
    fontSize: 26,
    fontWeight: "bold",
    color: "#5085E1",
    textAlign: "center",
  },
  container: {
    position: "absolute",
    width: "100%",
    height: "70%",
    backgroundColor: "white",
    bottom: 0,
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    borderColor: "#5085E1",
  },
  fileds: {
    marginLeft: 25,
    marginRight: -35,
    paddingLeft: 10,
  },
  backIcon: {
    position: "absolute",
    marginLeft: 15,
    marginTop: 15,
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
export default HairCutting;
