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
  
  const Rate = ({ navigation }) => {
    const [review, setreview] = useState("");
    const onSubmitPressed = () => {
      console.warn("Thanks for your valuable response");
    };

  
    return (
      <ImageBackground source={bgSignup} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.SignupText}>Rate & Review</Text>
          <Text style={{marginTop: 10}}>Rate & Review your experience with this salon.</Text>
            <View style={styles.rating}>
            <AntDesign name="star" size={40} color="black" />
            <AntDesign name="star" size={40} color="black" />
            <AntDesign name="star" size={40} color="black" />
            <AntDesign name="star" size={40} color="black" />
            <AntDesign name="star" size={40} color="black" />
            </View>
            <CustomInput
          placeholder="Reviews"
          value={review}
          setValue={setreview}
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
      marginTop: 10,
    }
  });
  export default Rate;