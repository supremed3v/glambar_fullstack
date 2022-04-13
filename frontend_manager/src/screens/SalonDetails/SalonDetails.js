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

import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";
import React, { useState } from "react";

const SalonDetails = ({ navigation }) => {
  const [Name, setName] = useState("");
  const [ContactNo, setContactNo] = useState("");
  const [Address, setAddress] = useState("");
  const [City, setCity] = useState("");
  const [Gender, setGender] = useState("");
  const [About, setAbout] = useState(""); 

  const onSave = () => {
    navigation.navigate("Home");
  };
  return (
    <ImageBackground source={bgClientDetails} style={styles.container}>
      <View style={styles.container_center}>
        <Text style={styles.ProfileText}>Salon Details</Text>
        <CustomInput
          placeholder="Name"
          value={Name}
          setValue={setName}
        />
        <CustomInput
          placeholder="Contact No # "
          value={ContactNo}
          setValue={setContactNo} 
          keyboardType="numeric"
        />
        <CustomInput
          placeholder="Address"
          value={Address}
          setValue={setAddress}
        />
        <CustomInput
          placeholder="City"
          value={City}
          setValue={setCity}
        />
        <CustomInput
          placeholder="Gender"
          value={Gender}
          setValue={setGender}
        />
        <CustomInput
          placeholder="About"
          value={About}
          setValue={setAbout}
        />
        <CustomButton text="Submit" onPress={onSave} />
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
