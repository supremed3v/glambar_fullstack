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
  import bgNewPassword from "../../../assets/signup-bg.jpeg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";

  

  const Scrub = ({navigation}) => {
    const [serviceLabel, setServiceLabel] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");

    const onSubmit = () => {
        console.warn("Submitted!");
    }
 
      return (
        <ImageBackground source={bgNewPassword} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.AddScrubText}>Add Scrub</Text>
         
          <CustomInput
          placeholder="Service Label"
          value={serviceLabel}
          setValue={setServiceLabel}
          secureTextEntry={true}
        />

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
    AddScrubText: {
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
    }
    
  });
  export default Scrub;
