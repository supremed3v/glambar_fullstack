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

  

  const Threading = () => {
    const [pickerValue, setPickerValue] = useState('Choose Category');
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const onSubmit = () => {
        console.warn("Submitted!");
    }
 
      return (
        <ImageBackground source={bgNewPassword} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.AddThreadingText}>Add Threading</Text>
         
          <View style={styles.category}>
                <Text style={styles.text2}>
                    Body Part
                </Text>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setPickerValue(itemValue)}>
                        <Picker.Item label="Choose Body Part" value="Choose City" />
                        <Picker.Item label="Eyebrows" value="Eyebrows" />
                        <Picker.Item label="Upper Lips" value="Upper Lips" />
                        <Picker.Item label="Chin" value="Chin" />
                        <Picker.Item label="Sides" value="Sides" />
                        <Picker.Item label="Forehead" value="Forehead" />
                        <Picker.Item label="Knuckles" value="Knuckles" />
                        <Picker.Item label="Face" value="Face" />
                    </Picker>
                </View>
            </View>

            <CustomInput
          placeholder="Description"
          value={description}
          setValue={setDescription}
          secureTextEntry={true}
        />
         <CustomInput
          placeholder="Price"
          value={price}
          setValue={setPrice}
          secureTextEntry={true}
        />
          <CustomButton text="Submit" onPressed={onSubmit}  />
          </View>
          </ImageBackground>
      );

  };
  const styles = StyleSheet.create({
    AddThreadingText: {
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
      marginTop:15,
      marginBottom:5
  },
  text2: {
    marginTop: 20,
    paddingStart: 45,
    color: '#827676',
    fontSize: 16,
    marginBottom: 10,
},
    
  });
  export default Threading;
