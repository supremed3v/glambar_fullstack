import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Option,
    useWindowDimensions,
    ScrollView
} from "react-native";

import React, { useState } from "react";
import  {Picker}  from "@react-native-picker/picker";
import bgNewPassword from "../../../assets/signup-bg.jpeg";


const AddService = ({navigation}) => {
    const [pickerValue, setPickerValue] = useState('Choose Category');
    return (
        <ImageBackground source={bgNewPassword} style={styles.container}>
            <View style={styles.container_center}>
                <Text style={styles.AddNewServiceText}>Add New Service</Text>
            </View>
            <View style={styles.category}>
                <Text style={styles.text}>
                    Service Category
                </Text>
                <View style={styles.pickerContainer}>
                    <Picker style={styles.picker}
                        selectedValue={pickerValue}
                        onValueChange={(itemValue) => setPickerValue(itemValue)}>
                        <Picker.Item label="Choose Category" value="Choose Category" />
                        <Picker.Item label="Baby Care" value="Baby Care" />
                        <Picker.Item 
                        onPress={() => navigation.navigate("Bleach",)}
                        label="Bleach" value="Bleach" />
                        <Picker.Item label="Massage" value="Massage" />
                        <Picker.Item label="Facial" value="Facial" />
                        <Picker.Item label="Hair Styling" value="Hair Styling" />
                        <Picker.Item label="Hair Treatment" value="Hair Treatment" />
                        <Picker.Item label="Hair Color" value="Hair Color" />
                        <Picker.Item label="Hair Cutting" value="Hair Cutting" />
                        <Picker.Item label="Makeup" value="Makeup" />
                        <Picker.Item label="Manicure" value="Manicure" />
                        <Picker.Item label="Pedicure" value="Pedicure" />
                        <Picker.Item label="Threading" value="Threading" />
                        <Picker.Item label="Waxing" value="Waxing" />
                        <Picker.Item label="Scrub" value="Scrub" />
                    </Picker>
                </View>
            </View>
        </ImageBackground>
    );

};
const styles = StyleSheet.create({
    AddNewServiceText: {
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
        paddingLeft: 30,
        color: '#827676',
        fontSize: 18,
        marginBottom: 10,
    },
    container_center: {
        alignItems: "center",
        marginTop: 30,
    },

    button: {
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
        marginTop:35,
        flexDirection:'row'
    }

});
export default AddService;
