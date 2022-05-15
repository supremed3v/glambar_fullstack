import React from "react";
import { Text, View, StyleSheet, } from "react-native";
const AppointmentSelectorButton = ({title, backgroundColor, style}) => {
    return (
        
            <View style={[styles.container, style, {backgroundColor}]}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
    )
}
const styles = StyleSheet.create({
    container: {
        height: 50,
        width: 180,
        backgroundColor: '#5085E1',
        justifyContent: "center",
        alignItems: "center"
    },
    title:{
        color: "white", 
        fontSize: 16
    }
})
export default AppointmentSelectorButton;