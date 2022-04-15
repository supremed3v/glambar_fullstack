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
  import  {Picker}  from "@react-native-picker/picker";

  const Waxing = ({navigation}) => {
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
      <ImageBackground source={bgClientDetails} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.ProfileText}>Waxing</Text>
          <CustomInput
          name="label"
          placeholder="Enter Service Name"
          control={control}
          rules={{ required: "Sevice name is required" }}
        />
        <CustomInput
          name="waxType"
          placeholder="Enter Wax Name"
          control={control}
          rules={{ required: "Wax name is required" }}
        />
           {/* <View style={styles.lengthCategory}>
                <Text style={styles.lengthText}>
                    Length
                </Text>
                <View style={styles.pickerlengthContainer}>
                    <Picker style={styles.lengthPicker}
                        selectedValue={length}
                        onValueChange={(itemValue) => setLength(itemValue)}>
                        <Picker.Item label="Choose Length" value="Choose Length"/>
                        <Picker.Item label="Half" value="Half" />
                        <Picker.Item label="Full" value="Full" />
                    </Picker>
                </View>
            </View> */}
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
    pickerlengthContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop:2,
      color:"gray",
      height:55,
  },
  lengthPicker: {
      width: 200,
      height: 40,
      borderColor: 'blue',
      borderWidth: 1,
      color:'#827676',
      fontWeight:'bold',
      backgroundColor:'#dee1e3',
  },
  lengthCategory:{
      flexDirection:'row',
      marginTop:5,
      marginBottom:5
  },
  lengthText: {
    marginTop: 20,
    paddingStart: 60,
    color: '#827676',
    fontSize: 16,
    marginBottom: 10,
},
  });
  export default Waxing;
  