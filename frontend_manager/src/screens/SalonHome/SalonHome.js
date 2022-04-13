import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import CustomInput from "../../components/CustomInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather"; 
import FontAwesome from "@expo/vector-icons/FontAwesome"; 
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


const SalonHome = ({ navigation }) => {
    const [chooseData, setChooseData] = useState('Select Items');
    const [isModalVisible, setIsModalVisible] =useState(false);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topNav}>
                <Entypo name="menu" size={35} color="black" />
                <Text style={{ marginStart: 20, fontWeight: "bold", fontSize: 25 }}>Stylers</Text>
                <View style={styles.topNav2}>
                    <Entypo name="bell" size={30} color="black" />
                </View>
            </View>
            {/* cards */}
            <SafeAreaView>
                <View style={styles.cardAlign}>
                    {/* Card 1 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                        <View style={{ alignItems: "center", marginTop:10 }}>
                           <Ionicons name="ios-person-circle-sharp" size={65} color="black" />
                        <Text style={{ fontWeight: "bold", fontSize: 16, }}>PROFILE</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Card 2 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                        <View style={{ alignItems: "center", marginTop:10 }}>
                        <AntDesign name="pluscircle" size={60} color="black" />
                        <Text style={{ marginTop:10,fontWeight: "bold", fontSize: 16, }}>POST STORY</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* card 3 and 4 */}
                <View style={styles.cardAlign}>
                    {/* Card 3 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                        <View style={{ alignItems: "center", marginTop:10 }}>
                            <Entypo name="star" size={65} color="black" />
                        <Text style={{ fontWeight: "bold", fontSize: 16, }}>RATING</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Card 4 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                            <View style={{ alignItems: "center", marginTop:10 }}>
                            <AntDesign name="calendar" size={67} color="black" />
                        <Text style={{ fontWeight: "bold", fontSize: 16, }}>VIEW BOOKINGS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* card 5 and 6 */}
                <View style={styles.cardAlign}>
                    {/* Card 5 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                        <View style={{ alignItems: "center", marginTop:10 }}>
                        <Feather name="scissors" size={65} color="black" />
                        <Text style={{ fontWeight: "bold", fontSize: 16, }}>MANAGE SERVICES</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Card 6 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("AddServices",)}>
                        <View style={{ alignItems: "center", marginTop:10 }}>
                        <MaterialIcons name="category" size={68} color="black" />
                        <Text style={{ fontWeight: "bold", fontSize: 16, }}>MANAGE CATEGORIES</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Card 7 and 8 */}
                <View style={styles.cardAlign}>
                    {/* Card 7 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                        <View style={{ alignItems: "center", marginTop:10 }}>
                        <FontAwesome name="suitcase" size={68} color="black" />
                        <Text style={{ fontWeight: "bold", fontSize: 16, }}>POST JOB</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Card 8 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                        <View style={{ alignItems: "center", marginTop:10 }}>
                        <AntDesign name="adduser" size={68} color="black" />
                        <Text style={{ fontWeight: "bold", fontSize: 16, }}>JOB APPLICANTS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Card 9 and 10 */}
                <View style={styles.cardAlign}>
                    {/* Card 9 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                        <View style={{ alignItems: "center", marginTop:10 }}>
                        <MaterialIcons name="add-box" size={68} color="black"/>
                        <Text style={{ fontWeight: "bold", fontSize: 16, }}>ADD SERVICE TYPE</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Card 10 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                        <View style={{ alignItems: "center", marginTop:10, marginBottom:10 }}>
                        <Feather name="unlock" size={68} color="black" />
                        <Text style={{ fontWeight: "bold", fontSize: 16, }}>UPDATE PASSWORD</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </SafeAreaView>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 50,
        paddingHorizontal: 20,
    },

    card: {
        width: 180,
        height: 120,
        marginStart: 12,
        marginTop: 20,
        backgroundColor:"#edeef2",
        borderRadius:5

    },
    cardAlign: {
        flexDirection: "row",
    },
    cardImg: {
        borderRadius: 15,
        width: 250,
        height: 150,
        resizeMode: "cover",
    },

    textSalon: {
        fontSize: 48,
        flexDirection: "row",
        fontWeight: "bold",
        color: "#5085E1",
        alignItems: "center",
        justifyContent: "space-between",
        paddingRight: 20,
    },
    textRating: {
        paddingLeft: 90,
    },
    topNav: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "space-around",
        paddingTop: 20,
        marginStart: 10,
        marginTop: 10
    },
    topNav2: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "space-around",
        padding: 20,
        marginStart: 175
    },
    
});

export default SalonHome;
