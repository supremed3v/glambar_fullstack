import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
    ScrollView,
} from "react-native";

import React, { useState } from "react";
import babyCareService from "../../../assets/babyCareService.jpg";
import bleach from "../../../assets/bleach.jpg";
import cutting from "../../../assets/cutting.png";
import facial from "../../../assets/facial.jpg";
import hairColor from "../../../assets/hairColor.jpg";
import makeup from "../../../assets/makeup.png";
import manicure from "../../../assets/manicure.png";
import styling from "../../../assets/styling.png";
import treatment from "../../../assets/treatment.png";
import massage from "../../../assets/massage.png";
import pedicure from "../../../assets/pedicure.png";
import scrub from "../../../assets/scrub.png";
import threading from "../../../assets/threading.png";
import waxing from "../../../assets/waxing.png";
import { SafeAreaView } from "react-native-safe-area-context";


const AddService = ({ navigation }) => {



    return (
        <ScrollView>
            <View style={styles.container_center}>
                <Text style={styles.AddNewServiceText}>Add New Service</Text>
            </View>
            <View style={styles.category}>
                <Text style={styles.text}>Choose category to add new service</Text>
                <SafeAreaView>
                    {/* Card#1 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("BabyCare",)}>
                            <View style={styles.cardContent}>
                                <Image source={babyCareService} style={styles.cardImg} />
                                <Text style={styles.cardText}>BABY CARE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#2 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Bleach",)}>
                            <View style={styles.cardContent}>
                                <Image source={bleach} style={styles.cardImg} />
                                <Text style={styles.cardText}>BLEACH</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#3 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Facial",)}>
                            <View style={styles.cardContent}>
                                <Image source={facial} style={styles.cardImg} />
                                <Text style={styles.cardText}>FACIAL</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#4*/}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("HairColor",)}>
                            <View style={styles.cardContent}>
                                <Image source={hairColor} style={styles.cardImg} />
                                <Text style={styles.cardText}>HAIR COLOR</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#5 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("HairCutting",)}>
                            <View style={styles.cardContent}>
                                <Image source={cutting} style={styles.cardImg} />
                                <Text style={styles.cardText}>HAIR CUTTING</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#6 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("HairStyling",)}>
                            <View style={styles.cardContent}>
                                <Image source={styling} style={styles.cardImg} />
                                <Text style={styles.cardText}>HAIR STYLING</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#7 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("HairTreatment",)}>
                            <View style={styles.cardContent}>
                                <Image source={treatment} style={styles.cardImg} />
                                <Text style={styles.cardText}>HAIR TREATMENT</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#8 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Makeup",)}>
                            <View style={styles.cardContent}>
                                <Image source={makeup} style={styles.cardImg} />
                                <Text style={styles.cardText}>MAKEUP</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#9 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Massage",)}>
                            <View style={styles.cardContent}>
                                <Image source={massage} style={styles.cardImg} />
                                <Text style={styles.cardText}>MASSAGE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#10 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Manicure",)}>
                            <View style={styles.cardContent}>
                                <Image source={manicure} style={styles.cardImg} />
                                <Text style={styles.cardText}>MANICURE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#11 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Pedicure",)}>
                            <View style={styles.cardContent}>
                                <Image source={pedicure} style={styles.cardImg} />
                                <Text style={styles.cardText}>PEDICURE</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#12 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Scrub",)}>
                            <View style={styles.cardContent}>
                                <Image source={scrub} style={styles.cardImg} />
                                <Text style={styles.cardText}>SCRUB</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#13 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Threading",)}>
                            <View style={styles.cardContent}>
                                <Image source={threading} style={styles.cardImg} />
                                <Text style={styles.cardText}>THREADING</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* Card#14 */}
                    <View style={styles.cardAlign}>
                        <TouchableOpacity
                            style={styles.card}
                            onPress={() => navigation.navigate("Waxing",)}>
                            <View style={styles.cardContent}>
                                <Image source={waxing} style={styles.cardImg} />
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
        marginTop: 30,
        fontSize: 26,
        fontWeight: "bold",
        color: "#5085E1",
    },
    container: {
        flex: 1,
    },
    text: {
        textAlign: "center",
        paddingLeft: 10,
        paddingRight: 10,
        color: "#827676",
        fontSize: 16,
        marginTop: 10,
        fontWeight: "normal",
    },
    container_center: {
        alignItems: "center",
        marginTop: 30,
    },
    cardAlign: {
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "column",
        marginBottom: 15
    },
    card: {
        width: 350,
        height: 100,
        borderRadius: 5,
        backgroundColor: "#F0F0F0"
    },
    cardText: {
        marginTop: 25,
        marginStart: 20,
        fontSize: 20,
        color: "black",
        fontWeight: "bold"
    },
    cardContent: {
        marginStart: 10,
        marginTop: 10,
        flexDirection: "row"
    },
    cardImg: {
        width: 120,
        height: 80,
    }
});
export default AddService;
