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
  const EMAIL_REGEX =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
  const ManageStaff = () => {
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
          <Text style={styles.ProfileText}>ManageStaff</Text>
          <CustomInput
          name="name"
          placeholder="Enter Staff Member Name"
          control={control}
          rules={{ required: "Staff member name is required" }}
        />
        <CustomInput
          name="contactNumber"
          placeholder="Enter Contact Number"
          control={control}
          keyboardType={"phone-pad"}
          rules={{
            required: "Contact number is required",
            minLength: {
              value: 12,
              message: "Contact number should be 12 numbers long",
            },
          }}
        />
         <CustomInput
          name="age"
          placeholder="Enter Age"
          control={control}
          keyboardType={"numeric"}
          rules={{ required: "Age is required" }}
        />
          <CustomInput
          name="gender"
          placeholder="Enter Gender"
          control={control}
          rules={{ required: "Gender is required" }}
        />
           <CustomInput
          name="cnic"
          placeholder="Enter CNIC"
          control={control}
          keyboardType={"numeric"}
          rules={{
            required: "CNIC is required",
            minLength: {
              value: 13,
              message: "CNIC should be 13 digits long",
            },
          }}
        />
          <CustomInput
          name="email"
          placeholder="Enter Your Email Address"
          control={control}
          rules={{
            required: "Email is required",
            pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
          }}
        />
         <CustomInput
          name="designation"
          placeholder="Enter Designation"
          control={control}
          rules={{ required: "Designation is required" }}
        />
         <CustomInput
          name="name"
          placeholder="Enter Experience"
          control={control}
          rules={{ required: "Experience is required" }}
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
  export default ManageStaff;
  