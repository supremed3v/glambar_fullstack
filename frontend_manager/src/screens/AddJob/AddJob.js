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

  import background from "../../../assets/bg.jpeg";
  import CustomInput from "../../components/CustomInput";
  import CustomButton from "../../components/CustomButton";

  const AddJob = ({naviagtion}) => {
    const {
      control,
      handleSubmit,
      formState: { errors },
    } = useForm();
  
    const { height } = useWindowDimensions();
  
    const post = (data) => {
      console.log(data);
      naviagtion.push("SalonHome");
    };
    
 
      return (
        <ImageBackground source={background} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.AddJobText}>Add Job</Text>
         
          <CustomInput
          name="salonName"
          placeholder="Enter your Salon Name"
          control={control}
          rules={{ required: "Salon name is required" }}
        />
        {/* <View style={styles.category}>
                <Text style={styles.text2}>
                    City
                </Text>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setPickerValue(itemValue)}>
                        <Picker.Item label="Choose City" value="Choose City" />
                        <Picker.Item label="Islamabad" value="Islamabad" />
                        <Picker.Item label="Rawalpindi" value="Rawalpindi" />
                    </Picker>
                </View>
            </View> */}
        <CustomInput
          name="address"
          placeholder="Enter your Salon Address"
          control={control}
          rules={{ required: "Address is required" }}
        />
         <CustomInput
          name="requiredStaff"
          placeholder="Enter Required Position"
          control={control}
          rules={{ required: "Mention Required position" }}
        />
        <CustomInput
          name="description"
          placeholder="Enter Job Description"
          control={control}
          rules={{ required: "Job Description is required" }}
        />
        <CustomInput
          name="experience"
          placeholder="Enter experience required."
          keyboardType={"numeric"}
          control={control}
          rules={{ required: "Experience is required" }}
        />
         <CustomInput
          name="Salary"
          placeholder="Enter salary you are offering for the position."
          keyboardType={"numeric"}
          control={control}
          rules={{ required: "Salaray is required" }}
        />
          <CustomButton
          text="Post Job"
          onPress={handleSubmit(post)}
        />
          </View>
          </ImageBackground>
      );

  };
  const styles = StyleSheet.create({
    AddJobText: {
        marginTop: 60,
        marginBottom:20,
        fontSize: 26,
        fontWeight: "bold",
        color: "#5085E1",
      },
    container: {
      height: "100%",
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
      marginTop:5,
      marginBottom:5
  },
  text2: {
    marginTop: 20,
    paddingStart: 60,
    color: '#827676',
    fontSize: 16,
    marginBottom: 10,
},

    
  });
  export default AddJob;
