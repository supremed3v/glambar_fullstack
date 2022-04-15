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
  import React from "react";
  import { useForm } from "react-hook-form";
  
  const Manicure= () => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const { height } = useWindowDimensions();
  
    const onSave = (data) => {
      console.log(data);
    };
 
    return (
      <ImageBackground source={bgClientDetails} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.ProfileText}>Manicure</Text>
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
  export default Manicure;
  