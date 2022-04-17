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

import babyCare from "../../../assets/babyCareService.jpg";
import Ionicons from "@expo/vector-icons/Ionicons";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import React from "react";
import { useForm } from "react-hook-form";

const BabyCare = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { height } = useWindowDimensions();

  const onSave = (data) => {
    console.log(data);
    // navigation.push("Service");
  };
  const onBackPress = () => {
    // set route
    console.log("Send me to previous screen");
  };
 
  return (
    <>
      <ImageBackground source={babyCare} style={styles.image} resizeMode= "cover"/>
      <View style={{position: "absolute", width: "100%", height: "60%", backgroundColor: "teal", bottom: 0}}>
      <CustomInput
          name="label"
          placeholder="Enter Service Name"
          control={control}
          rules={{ required: "Sevice name is required" }}
        />
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
            <CustomButton
          text="Submit"
          onPress={handleSubmit(onSave)}
        />
      </View>

    </>
       
  );
};
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  ProfileText: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#5085E1",
    marginBottom: 20,
  },
  container: {
    bottom: 0,
    width: "100%",
    height: "100%",
    position: "absolute",
    backgroundColor: "white",
    borderTopLeftRadius: 45,
    borderTopRightRadius: 45,
    flex: 1,
  },
  backIcon: {
    position: "absolute",
    marginLeft: 20,
    marginTop: 20,
  },
  // container_center: {
  //   position: "absolute",
  //   zIndex:3,
  //   alignItems: "center",
  //   marginTop: 130,
  //   display: "flex",
  //   justifyContent: "center",
  //   flexDirection: "column",
  // },
});
export default BabyCare;
