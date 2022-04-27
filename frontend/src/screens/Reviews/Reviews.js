import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView, SafeAreaView, FlatList } from "react-native";
import React from "react";
import salonbg from "../../../assets/salonbg.png";

const Reviews = () => {
    const AddToCart = () => {
        console.log("Pressed");
    };
    return (
        <View>
            <Text style={styles.heading}>Reviews</Text>
            <ScrollView showsVerticalScrollIndicator={false}>
                <SafeAreaView>
                    <View style={styles.container}>
                        <View>
                            <Text style={styles.textHeading}>
                                Anaya Rajpoot
                            </Text>
                            <Text style={styles.Text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                                corporis laudantium ratione, sapiente voluptatibus pariatur
                                repellendus, exercitationem asperiores illo saepe rem!</Text>
                        </View>
                        {/* new review */}
                        <View>
                            <Text style={styles.textHeading}>
                                Amna Ilyas
                            </Text>
                            <Text style={styles.Text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                                corporis laudantium ratione, sapiente voluptatibus pariatur
                                repellendus, exercitationem asperiores illo saepe rem!</Text>
                        </View>
                        {/* new review */}
                        <View>
                            <Text style={styles.textHeading}>
                                Sabeena Kiyani
                            </Text>
                            <Text style={styles.Text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem,
                                corporis laudantium ratione, sapiente voluptatibus pariatur
                                repellendus, exercitationem asperiores illo saepe rem!</Text>
                        </View>
                    </View>
                </SafeAreaView>
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    heading: {
        fontSize: 26,
        fontWeight: "bold",
        color: "#5085E1",
        marginBottom: 20,
        borderBottomWidth: 2,
        borderColor: "#A2BCED",
        marginTop: 60,
        marginStart: 25,
        paddingBottom: 10,
        marginRight: 200,
    },
    textHeading: {
        marginTop: 10,
        marginStart: 20,
        marginLeft: 20,
        fontWeight: "bold",
        fontSize: 17
    },
    container: {
        marginStart: 10,
        marginBottom: 10
    },
    Text: {
        alignItems: "center",
        marginTop: 5,
        marginStart: 20,
        marginLeft: 20,
    },
});

export default Reviews;
