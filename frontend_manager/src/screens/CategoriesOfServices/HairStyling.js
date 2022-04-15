import {
  ImageBackground,
  TextInput,
  Image,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
  ScrollView
} from "react-native";

import React from "react";
import { useForm } from "react-hook-form";
import { Picker } from "@react-native-picker/picker";
import bgNewPassword from "../../../assets/signup-bg.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";



const HairStyling  = () => {
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
    <ImageBackground source={bgNewPassword} style={styles.container}>
      <View style={styles.container_center}>
        <Text style={styles.AddHairStylingText}>Add Hair Styling</Text>

        
        <CustomInput
          name="label"
          placeholder="Enter Service Name"
          control={control}
          rules={{ required: "Sevice name is required" }}
        />
        {/* <View style={styles.category}>
          <Text style={styles.text2}>
            Length
          </Text>
          <View style={styles.pickerContainer}>
            <Picker style={styles.picker}
              selectedValue={pickerValue}
              onValueChange={(itemValue) => setPickerValue(itemValue)}>
              <Picker.Item label="Choose Length" value="Choose City" />
              <Picker.Item label="Ear" value="Ear" />
              <Picker.Item label="Chin" value="Chin" />
              <Picker.Item label="Shoulder" value="Shoulder" />
              <Picker.Item label="Armpit" value="Armpit" />
              <Picker.Item label="Elbow" value="Elbow" />
              <Picker.Item label="Waist" value="Waist" />
              <Picker.Item label="Hip" value="Hip" />
              <Picker.Item label="Knee" value="Knee" />
            </Picker>
          </View>
        </View> */}
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
          keyboardType={"numeric"}
        />
        <CustomButton text="Submit" onPress={handleSubmit(onSave)} />
      </View>
    </ImageBackground>
  );

};
const styles = StyleSheet.create({
  AddHairStylingText: {
    marginTop: 60,
    marginBottom: 20,
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
    color: '#827676',
    fontWeight: 'normal',
    marginBottom: 10,
  },
  container_center: {
    alignItems: "center",
    marginTop: 30,
  },

  button: {
    color: "#5085E1"
  },
  signInText: {
    marginTop: 150,
    color: "#827676"
  },
  pickerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 2,
    color: "gray",
    height: 55,
  },
  picker: {
    width: 200,
    height: 40,
    borderColor: 'blue',
    borderWidth: 1,
    color: '#827676',
    fontWeight: 'bold',
    backgroundColor: '#dee1e3',
  },
  category: {
    flexDirection: 'row',
    marginTop: 5,
    marginBottom: 5
  },
  text2: {
    marginTop: 20,
    paddingStart: 60,
    color: '#827676',
    fontSize: 16,
    marginBottom: 10,
  },

});
export default HairStyling;
