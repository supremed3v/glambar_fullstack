import {
    ImageBackground,
    StyleSheet,
    Text,
    View,
    Option,
    TouchableOpacity,
    useWindowDimensions,
    ScrollView,
} from "react-native";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { SafeAreaView } from "react-native-safe-area-context";


const AddService = ({ navigation }) => {



    return (
            <ScrollView>
                <View style={styles.container_center}>
                    <Text style={styles.AddNewServiceText}>Add New Service</Text>
                </View>
                <View style={styles.category}>
                    <Text style={styles.text2}>Choose category to add new service</Text>
                    <SafeAreaView>
                        {/* Card#1 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("BabyCare",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>BABY CARE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#2 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("Bleach",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>BLEACH</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#3 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("Facial",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>FACIAL</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#4*/}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("HairColor",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>HAIR COLOR</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#5 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("HairCutting",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>HAIR CUTTING</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#6 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("HairStyling",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>HAIR STYLING</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#7 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("HairTreatment",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>HAIR TREATMENT</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#8 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("Massage",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>MASSAGE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#9 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("Manicure",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>MANICURE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#10 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("Pedicure",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>PEDICURE</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#11 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("Scrub",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>SCRUB</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#12 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("Threading",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>THREADING</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        {/* Card#13 */}
                        <View style={styles.cardAlign}>
                            <TouchableOpacity
                                style={styles.card}
                                onPress={() => navigation.navigate("Waxing",)}>
                                <View style={{ alignItems: "center", marginTop: 12 }}>
                                    <Text style={styles.cardText}>WAXING</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </SafeAreaView>
                </View>
            </ScrollView>
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
    text2: {
        
        textAlign: "center",
        paddingLeft: 10,
        paddingRight: 10,
        color: "#827676",
        fontSize:16,
        marginTop:10,
        fontWeight: "normal",
    },
    text: {
        marginTop: 15,
        paddingStart: 85,
        color: '#827676',
        fontSize: 16,
        alignItems: "center",
        justifyContent: "center",
    },
    container_center: {
        alignItems: "center",
        marginTop: 30,
    },
    cardAlign: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        marginBottom:15
    },
    card: {
        width: 350,
        height: 55,
        borderRadius: 5,
        backgroundColor: "#edeef2"
    },
    cardText: {
        fontSize: 20,
        fontWeight: "bold"
    }



});
export default AddService;
