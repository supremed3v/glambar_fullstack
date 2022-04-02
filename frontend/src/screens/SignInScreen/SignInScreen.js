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

import image from "../../../assets/bg-screen.jpg";
import logo from "../../../assets/logo-white.png";
import CustomInput from "../../components/CustomInput";
import CustomButton from "../../components/CustomButton";

import React, { useState } from "react";
import Foundation from '@expo/vector-icons/Foundation';
import FontAwesome from '@expo/vector-icons/FontAwesome';

const SignInScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { height } = useWindowDimensions();

  const onSignInPressed = () => {
    console.warn("Sign in");
  };

  const onForgotPasswordPressed = () => {
    console.log("Forgot Password");
  };

  const onSignInGoogle = () =>{
    console.log("Hello Google");
}

const onCreateAnAccount = () =>{
    console.warn("Create an account");
}

  return (
      <ScrollView showsVerticalScrollIndicator={false} >
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.centerItems}>
          <Image
            source={logo}
            style={[styles.logo, { height: height * 0.3 }]}
          />
          
        </View>
        
        <View style={styles.centerItems}>
          <Text style={styles.text}>Login or Signup to get started.</Text>
          
          <View style={styles.userInput}>
          <FontAwesome style={styles.userIcon} name="user" size={30} color="white" />
          <CustomInput
            placeholder="Username"
            value={username}
            setValue={setUsername}
            
            
          />
          </View>

          <View style={styles.passwordInput}>
          <Foundation style={styles.passwordIcon} name="key" size={30} color="white" />
          <CustomInput
            placeholder ="Password" 
            value={password}
            setValue={setPassword}
            secureTextEntry={true}

          />
          </View>

          <CustomButton text="Sign In" onPress={onSignInPressed} />

          <CustomButton
            text="Forgot Password?"
            onPress={onForgotPasswordPressed}
            type="SECONDARY"
          />

          <CustomButton text="Sign In With Google" onPress={onSignInGoogle} bgColor="#FAE9EA" fgColor="#DD4D44" />

          <CustomButton
            text="Don't have an account? Create one."
            onPress={onCreateAnAccount}
            type="SECONDARY"
          />
        </View>
      </ImageBackground>
    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
  },
  centerItems: {
    marginTop: 5,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  text: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    width: 250,
    marginBottom: 10,
  },
  logo: {
    width: "50%",
    maxHeight: 300,
    display: "flex",
    zIndex: 2,
    maxWidth: 500,
  },
  passwordInput:{
    textAlign: "center",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems:"flex-end",
    marginRight: 40,
    
  },
  passwordIcon:{
 marginLeft:40,
 height: 40,
  },
  userInput:{
    textAlign: "center",
    flexDirection: "row",
    width: "90%",
    justifyContent: "space-between",
    alignItems:"flex-end",
    marginRight: 40,
    
  },
  userIcon:{
 marginLeft:40,
 height: 40,
  }
  
});

export default SignInScreen;
