import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Alert,
} from "react-native";

import Ionicons from "@expo/vector-icons/Ionicons";
import background from "../../../assets/bg.jpeg";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import React from "react";
import { useForm } from "react-hook-form";

const AddAddress = ({navigation}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onAddAddressPressed = (data) => {
    console.log(data);
    Alert.alert("", "Submitted Successfully");
  };
  const onBackPress = () => {
    // set route
    navigation.push("AddressDetails");
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
          <Text style={styles.heading}>Add Your Address</Text>

          <CustomInput
            name="city"
            placeholder="Enter Your City"
            control={control}
            rules={{ required: "City name is required" }}
          />
          <CustomInput
            name="area"
            placeholder="Enter Your City"
            control={control}
            rules={{ required: "Area is required" }}
          />
          <CustomButton
            text="Submit"
            onPress={handleSubmit(onAddAddressPressed)}
          />
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
    marginRight: 120,
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
export default AddAddress;
