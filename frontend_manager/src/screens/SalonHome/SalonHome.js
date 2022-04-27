import {
    View,
    Text,
    StyleSheet,
    Image,
    ImageBackground,
    ScrollView,
    FlatList,
    SafeAreaView,
    TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import profile from "../../../assets/profile.png";
import story from "../../../assets/story.png";
import booking from "../../../assets/booking.png";
import job from "../../../assets/job.png";
import jobseeker from "../../../assets/jobseeker.png";
import rating from "../../../assets/rating.png";
import service from "../../../assets/service.png";
import forgotpassword from "../../../assets/forgotpassword.png";
import Entypo from "@expo/vector-icons/Entypo";
import Feather from "@expo/vector-icons/Feather";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";


const SalonHome = ({ navigation }) => {
    const [chooseData, setChooseData] = useState('Select Items');
    const [isModalVisible, setIsModalVisible] = useState(false);

    return (
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.topNav}>
                <Entypo name="menu" size={35} color="black" />
                <Text style={{ marginStart: 15, fontWeight: "bold", fontSize: 25 }}>Stylers</Text>
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
                        onPress={() => navigation.navigate("SalonDetails",)}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Image source={profile} />
                            <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 10 }}>PROFILE</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Card 2 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Image source={story} />
                            <Text style={{ marginTop: 10, fontWeight: "bold", fontSize: 16, }}>POST STORY</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* card 3 and 4 */}
                <View style={styles.cardAlign}>
                    {/* Card 3 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("SalonServices",)}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Image source={rating} />
                            <Text style={{ fontWeight: "bold", fontSize: 16, }}>RATING</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Card 4 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("Appointment",)}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Image source={booking} />
                            <Text style={{ fontWeight: "bold", fontSize: 16, }}>VIEW BOOKINGS</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* card 5 and 6 */}
                <View style={styles.cardAlign}>
                    {/* Card 5 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("Service",)}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Image source={service} />
                            <Text style={{ fontWeight: "bold", fontSize: 16, marginTop: 2 }}>MANAGE SERVICES</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Card 6 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("Package",)}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Feather name="package" size={64} color="#5085E1" />
                            <Text style={{ fontWeight: "bold", fontSize: 16, }}>MANAGE PACKAGES</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                {/* Card 7 and 8 */}
                <View style={styles.cardAlign}>
                    {/* Card 7 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("Job",)}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Image source={job} />
                            <Text style={{ fontWeight: "bold", fontSize: 16, }}>POST JOB</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Card 8 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("JobSeekerRecruited",)}>
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <Image source={jobseeker} />
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
                        <View style={{ alignItems: "center", marginTop: 10 }}>
                            <MaterialIcons name="add-box" size={64} color="#5085E1" />
                            <Text style={{ fontWeight: "bold", fontSize: 16, }}>ADD SERVICE TYPE</Text>
                        </View>
                    </TouchableOpacity>
                    {/* Card 10 */}
                    <TouchableOpacity
                        style={styles.card}
                        onPress={() => navigation.navigate("UpdatePassword",)}>
                        <View style={{ alignItems: "center", marginTop: 10, marginBottom: 10 }}>
                            <Image source={forgotpassword} />
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
    },
    card: {
        width: 175,
        height: 120,
        marginStart: 12,
        marginTop: 15,
        borderRadius: 5,

    },
    cardAlign: {
        flexDirection: "row",
        alignItems: "center",
    },
    textRating: {
        paddingLeft: 90,
    },
    topNav: {
        flexDirection: "row",
        alignItems: "center",
        alignContent: "space-around",
        paddingTop: 20,
        marginStart: 20,
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
