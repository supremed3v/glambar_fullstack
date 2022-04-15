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

  import React from "react";
  import { useForm } from "react-hook-form";
  import bgNewPassword from "../../../assets/signup-bg.jpeg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";

  

  const NewPassword= ({ navigation }) => {
    const { control, handleSubmit, watch } = useForm();
  
    const pwd = watch("password");

    const onUpdatePasswordPressed = (data) => {
      console.log(data);
        console.warn("Password Updated.");
    };
 
      return (
        <ImageBackground source={bgNewPassword} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.UpdatePasswordText}>Create New Password</Text>
          <Text style={styles.text}>
            Your new password must be different from previous used password.
        </Text>
        <CustomInput
          name="previousPassword"
          placeholder="Enter Your Previous Password"
          control={control}
          secureTextEntry ={true}
          rules={{ required: "Previous Password is required" }}
        />
       <CustomInput
          name="password"
          placeholder="Password"
          secureTextEntry={true}
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 7,
              message: "Password should be 7 characters long",
            },
          }}
        />

        <CustomInput
          name="confirm-password"
          placeholder="Password"
          secureTextEntry={true}
          control={control}
          rules={{
            validate: (value) => value === pwd || "Password do not match",
          }}
        />
          <CustomButton text="Reset Password" onPressed={handleSubmit(onUpdatePasswordPressed)}  />
          </View>
          </ImageBackground>
      );

  };
  const styles = StyleSheet.create({
    UpdatePasswordText: {
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
  export default NewPassword;
