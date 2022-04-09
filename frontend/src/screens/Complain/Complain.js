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
  
  import bgSignup from "../../../assets/signup-bg.jpeg";
  
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";
  import AntDesign from "@expo/vector-icons/AntDesign"; 
  import React, { useState } from "react";
  
  const Complain = ({ navigation }) => {
    const [complain, setcomplain] = useState("");
    const onSubmitPressed = () => {
      console.warn("Thanks for your valuable response");
    };

  
    return (
      <ImageBackground source={bgSignup} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.SignupText}>Complain</Text>
            <CustomInput
          placeholder="Your text here...."
          value={complain}
          setValue={setcomplain}
        />
          <CustomButton text="Submit" onPress={onSubmitPressed} />

        </View>
      </ImageBackground>
    );
  };
  
  const styles = StyleSheet.create({
    SignupText: {
      marginTop: 60,
      fontSize: 26,
      fontWeight: "bold",
      color: "#5085E1",
      marginBottom: 20,
    },
    container: {
      flex: 1,
    },
  
    text: {
      marginTop: 20,
      textAlign: "left",
      color: "#827676",
      fontWeight: "normal",
    },
    container_center: {
      alignItems: "center",
      marginTop: 30,
    },
  
    button: {
      color: "#5085E1",
    },
  
    signInText: {
      marginTop: 150,
      color: "#827676",
    },
    rating:{
        flexDirection: "row",
    }
  });
  export default Complain;