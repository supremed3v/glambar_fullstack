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
  
  const ManageStaff = ({ navigation }) => {
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [gender, setGender] = useState("");
    const [cnic, setCNIC] = useState("");
    const [email, setEmail] = useState("");
    const [contactno, setContact] = useState("");
    const [designation, setDesignation] = useState("");
    const [experience, setExperience] = useState("");

    const onSave = () => {
      navigation.navigate("Home");
    };
    return (
      <ImageBackground source={bgClientDetails} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.ProfileText}>ManageStaff</Text>
          <CustomInput
            placeholder="Name"
            value={name}
            setValue={setName}
          />
          <CustomInput
            placeholder="Age"
            value={age}
            setValue={setAge} 
            keyboardType= "numeric"
            
          />
          <CustomInput
            placeholder="Gender"
            value={gender}
            setValue={setGender}
          />
           <CustomInput
            placeholder="CNIC"
            value={cnic}
            setValue={setCNIC} 
            keyboardType= "numeric"
            
          />
          <CustomInput
            placeholder="Email"
            value={email}
            setValue={setEmail}
          />
           <CustomInput
            placeholder="Contact No."
            value={contactno}
            setValue={setContact} 
            keyboardType= "numeric"
            
          />
          <CustomInput
            placeholder="Designation"
            value={designation}
            setValue={setDesignation}
            
          />
          <CustomInput
            placeholder="Experience"
            value={experience}
            setValue={setExperience}
            
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
  export default ManageStaff;
  