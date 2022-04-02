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
const ClientDetails = () => {
    const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [contact, setContact] = useState("");
  const [address, setAddress] = useState("");

  const onAddingClientDetails = () =>{
    console.warn("Add Clients Details");
}
    return(
    <ImageBackground source={bgClientDetails} style={styles.container}>
      <View style={styles.container_center}>
        <Text style={styles.ProfileText}>Profile</Text>
        <CustomInput
          placeholder="First Name"
          value={firstname}
          setValue={setFirstname}
        />
        <CustomInput
          placeholder="Last Name"
          value={lastname}
          setValue={setLastname}
        />
        <CustomInput
          placeholder="Contact No #"
          value={contact}
          setValue={setContact}
          keyboardType="numeric"
        />
        <CustomInput
          placeholder="Address"
          value={address}
          setValue={setAddress}
        />
        <CustomButton text="Save" onPressed={onAddingClientDetails}  />
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
export default ClientDetails;