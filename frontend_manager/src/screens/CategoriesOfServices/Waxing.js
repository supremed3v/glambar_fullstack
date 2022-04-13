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
  import React, { useState } from "react";
  import  {Picker}  from "@react-native-picker/picker";

  const Waxing = ({ navigation }) => {
    const [label, setLabel] = useState("");
    const [type, setType] = useState("");
     const [length, setLength] = useState('Choose Category');
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
  
    const onSave = () => {
      navigation.navigate("Home");
    };
    return (
      <ImageBackground source={bgClientDetails} style={styles.container}>
        <View style={styles.container_center}>
          <Text style={styles.ProfileText}>Waxing</Text>
          <CustomInput
            placeholder="Service Label"
            value={label}
            setValue={setLabel}
          />
          <CustomInput
            placeholder="Wax Type"
            value={type}
            setValue={setType}
          />
           <View style={styles.lengthCategory}>
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
            </View>
          <CustomInput
            placeholder="Description "
            value={description}
            setValue={setDescription} 
            
          />
          <CustomInput
            placeholder="Price"
            value={price}
            setValue={setPrice}
            keyboardType= "numeric"
          />
          <CustomButton text="Submit" onPress={onSave} />
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
  