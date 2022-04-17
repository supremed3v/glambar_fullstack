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
  // import bgNewPassword from "../../../assets/signup-bg.jpeg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";

  

  const Makeup = ({navigation}) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const { height } = useWindowDimensions();
  
    const onSave = (data) => {
      console.log(data);
      navigation.push("Service");
    };
 
      return (
        // <ImageBackground source={bgNewPassword} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.AddMakeupText}>Makeup</Text>
          <CustomInput
          name="label"
          placeholder="Enter Service Name"
          control={control}
          rules={{ required: "Sevice name is required" }}
        />

<CustomInput
          name="description"
          placeholder="Enter Description"
          control={control}
          rules={{ required: "Description is required" }}
        />
        <CustomInput
          name="price"
          placeholder="Enter Price"
          control={control}
          rules={{ required: "Price is required" }}
          keyboardType={"numeric"}
        />
        <CustomButton text="Submit" onPress={handleSubmit(onSave)} />
          </View>
          // </ImageBackground>
      );

  };
  const styles = StyleSheet.create({
    AddMakeupText: {
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
  export default Makeup;
