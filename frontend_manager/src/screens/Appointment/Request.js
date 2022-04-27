import {
    Alert,
    Image,
    StyleSheet,
    Text,
    View,
    ScrollView,
    Dimensions,
    TouchableOpacity,
} from "react-native";

import profile from "../../../assets/profile.png";
import CustomButton from "../../components/CustomButton";
import AppointmentSelectorButton from "../../components/AppointmentSelectorButton/AppointmentSelectorButton";

const Request = ({ navigation }) => {
    const onAppointmentPressed = () => {
        navigation.navigate("Appointment");
    };
    const onViewDetailsPressed = () => {

    };
    const onAcceptPressed = () => {
        Alert.alert("", "Request Accepted!");
    };
    const onRejectPressed = () => {
        Alert.alert("", "Request Rejected!");
    };
    return (
        <View>
            <View style={styles.container_center}>
                <Text style={styles.AppointmentText}>Bookings</Text>
                <View style={{ flexDirection: "row", paddingHorizontal: 20, }}>
                    <TouchableOpacity onPress={onAppointmentPressed}>
                        <AppointmentSelectorButton title="Appointment" backgroundColor='rgb(162, 188, 237)' style={styles.borderLeft} />
                    </TouchableOpacity>
                    <AppointmentSelectorButton title="Request" backgroundColor='rgb(80, 133, 225)' style={styles.borderRight} />
                </View>
            </View>
            <ScrollView>
                {/* card1 */}
                <View style={styles.container}>
                    <View style={styles.box}>
                        <View style={styles.salonDetails}>
                            <Image source={profile} style={styles.card}></Image>
                            <View style={styles.salonName}>
                                <Text style={styles.Text}>Name: Anaya Ali</Text>
                                <Text style={styles.Text}>Date: 03/07/2022</Text>
                                <Text style={styles.Text}>Time: 01:00PM</Text>
                            </View>
                        </View >
                        <View style={styles.btn}>
                            <CustomButton text="View Details" onPress={onViewDetailsPressed} />
                            <CustomButton text="Accept" onPress={onAcceptPressed} />
                            <CustomButton text="Reject" onPress={onRejectPressed} />
                        </View>
                    </View>
                </View>
                
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    AppointmentText: {
        marginTop: 40,
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
    borderLeft: {
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8
    },
    borderRight: {
        borderBottomRightRadius: 8,
        borderTopRightRadius: 8,
    },
    container: {
        marginTop: 10,
        alignItems: "center",
        width: Dimensions.get('window').width,
    },
    box: {
        backgroundColor: "#F0F0F0",
        width: 350,
        height: 145,
        borderRadius: 8,
    },
    salonDetails: {
        flexDirection: "row",
        paddingTop: 10,
        paddingStart: 25,
        paddingEnd: 10,
    },
    card: {
        borderRadius: 5,
        width: 70,
        height: 70,
        resizeMode: "cover",
    },
    salonName: {
        flexDirection: "column",
        marginTop: 5,
        marginStart: 15,
    },
    Text: {
        fontSize: 15,
    },
    btn: {
        flexDirection: "row",
        width:140,
        marginStart:6,
        alignContent: "space-between",
        alignItems: "center",
    }
});
export default Request;