import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  Alert,

} from "react-native";

import profile from "../../../assets/profile.png";
import CustomButton from "../../components/CustomButton";
import AppointmentSelectorButton from "../../components/AppointmentSelectorButton/AppointmentSelectorButton";

const JobSeekerRecruited = ({ navigation }) => {
  const onRequestPressed = () => {
      navigation.navigate("JobSeekerRequest");
  };
  const onViewDetailsPressed = () => {

  };


  return (
      <View>
          <View style={styles.container_center}>
              <Text style={styles.AppointmentText}>Candidates</Text>

              <View style={{ flexDirection: "row", paddingHorizontal: 20, }}>
                  <AppointmentSelectorButton title="Selected" backgroundColor='rgb(80, 133, 225)' style={styles.borderLeft} />
                  <TouchableOpacity onPress={onRequestPressed}>
                      <AppointmentSelectorButton title="Request" backgroundColor='rgb(162, 188, 237)' style={styles.borderRight} />
                  </TouchableOpacity>
              </View>
          </View>
          <ScrollView>
              <View style={styles.container}>
                  <View style={styles.box}>
                      <View style={styles.salonDetails}>
                          <Image source={profile} style={styles.card}></Image>
                          <View style={styles.salonName}>
                              <Text style={styles.Text}>Name: Anaya Ali</Text>
                              <Text style={styles.Text}>No: +92 300 5117682</Text>
                              <Text style={styles.Text}>Experience: 5 years</Text>
                          </View>
                      </View >
                      <View style={styles.btn}>
                      <CustomButton text="View Details" onPress={onViewDetailsPressed} />
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
      width:350,
      justifyContent:"center",
      alignItems: "center",
  }
});
export default JobSeekerRecruited;