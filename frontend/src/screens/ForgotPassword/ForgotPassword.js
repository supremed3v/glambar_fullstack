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
  import bgSignup from "../../../assets/signup-bg.jpeg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";

  

  const ForgotPassword = () => {
    const [email, setEmail] = useState("");

    const onForgotPasswordPressed = () => {
        console.warn("Link Sent");
    }
    const onLogInPressed = () =>{
        console.log(login);
    }
      return (
        <ImageBackground source={bgSignup} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.ForgotPasswordText}>Forgot Your Password?</Text>
          <Text style={styles.text}>
            Enter your email address and we'll send you instructions to reset your password.
        </Text>
          <CustomInput placeholder="Email" value={email} setValue={setEmail} />
          <CustomButton text="Send Reset Link" onPressed={onForgotPasswordPressed}  />
          <Text style={styles.logInText}>
            Back to <Text onPress={onLogInPressed} style={styles.button}>Login</Text>
        </Text>
          </View>
          </ImageBackground>
      );

  };
  const styles = StyleSheet.create({
    ForgotPasswordText: {
        marginTop: 60,
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
  export default ForgotPassword;
