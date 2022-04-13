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

  import React, { useState } from "react";
  import  {Picker}  from "@react-native-picker/picker";
  import bgNewPassword from "../../../assets/signup-bg.jpeg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";

  

  const AddJob = () => {
    const [salonName, setSalonName] = useState("");
    const [pickerValue, setPickerValue] = useState('Choose Category');
  const [address, setAddress] = useState("");
  const [requiredStaff, setRequiredStaff] = useState("");
  const [description, setDescription] = useState("");
  const [experience, setExperience] = useState("");
  const [salary, setSalary] = useState("");


    const onSubmit = () => {
        console.warn("Submitted!");
    }
 
      return (
        <ImageBackground source={bgNewPassword} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.AddJobText}>Add Job</Text>
         
        <CustomInput
          placeholder="Salon Name"
          value={salonName}
          setValue={setSalonName}
          secureTextEntry={true}
        />
        <View style={styles.category}>
                <Text style={styles.text2}>
                    City
                </Text>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setPickerValue(itemValue)}>
                        <Picker.Item label="Choose City" value="Choose City" />
                        <Picker.Item label="Islamabad" value="Islamabad" />
                        <Picker.Item label="Rawalpindi" value="Rawalpindi" />
                    </Picker>
                </View>
            </View>
        <CustomInput
          placeholder="Address"
          value={address}
          setValue={setAddress}
          secureTextEntry={true}
        />
         <CustomInput
          placeholder="Required Staff"
          value={requiredStaff}
          setValue={setRequiredStaff}
          secureTextEntry={true}
        />
         <CustomInput
          placeholder="Description"
          value={description}
          setValue={setDescription}
          secureTextEntry={true}
        />
        <CustomInput
          placeholder="Experience"
          value={experience}
          setValue={setExperience}
          secureTextEntry={true}
        />
         <CustomInput
          placeholder="Salary"
          value={salary}
          setValue={setSalary}
          secureTextEntry={true}
        />
          <CustomButton text="Submit" onPressed={onSubmit}  />
          </View>
          </ImageBackground>
      );

  };
  const styles = StyleSheet.create({
    AddJobText: {
        marginTop: 60,
        marginBottom:20,
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
    
      button:{
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
      marginTop:2,
      color:"gray",
      height:55,
  },
  picker: {
      width: 200,
      height: 40,
      borderColor: 'blue',
      borderWidth: 1,
      color:'#827676',
      fontWeight:'bold',
      backgroundColor:'#dee1e3',
  },
  category:{
      flexDirection:'row',
      marginTop:5,
      marginBottom:5
  },
  text2: {
    marginTop: 20,
    paddingStart: 60,
    color: '#827676',
    fontSize: 16,
    marginBottom: 10,
},

    
  });
  export default AddJob;
