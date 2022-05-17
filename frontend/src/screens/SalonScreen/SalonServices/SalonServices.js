import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  FlatList,
  TouchableOpacity,
  Alert
} from "react-native";
import React from "react";
import myData from "../../../DummyData/SalonServiceData.json";
import AntDesign from "@expo/vector-icons/AntDesign";

<<<<<<< HEAD
const SalonServices = ({ navigation }) => {
=======
const SalonServices = ({}) => {
  const [salon, setSalon] = useState(null);
  const route = useRoute();
  const id = route.params?.id;

  useEffect(() => {
    // Fetch salon with id
    DataStore.query(Salon, id).then(setSalon);
  }, []);

  if (!salon) {
    return <ActivityIndicator size={"large"} color="blue" />;
  }
>>>>>>> c30596f4b1f8e36cff0c4fbc8e9a05c575589576

  const AddToCart = () => {
    Alert.alert("", "Added to cart.");
  };
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <SafeAreaView>
        <Text style={styles.heading}>Services</Text>
        <FlatList
          data={myData}
          renderItem={({ item, id }) => (
            <TouchableOpacity
              key={id}
              style={styles.card}
              onPress={() => navigation.navigate({ myData })}
            >
              <View style={styles.container}>
                <Image source={{ uri: item.img }} style={styles.cardImg} />
                <View style={styles.ViewTextSalon}>
                  <Text style={styles.salonText}>Name: {item.label}</Text>
                  <Text style={styles.salonText}>Price: {item.price}</Text>
                </View>
                <AntDesign
                  name="plussquare"
                  size={24}
                  color="black"
                  onPress={AddToCart}
                  style={styles.addToCartIcon}
                />
              </View>
            </TouchableOpacity>
          )}
        />
      </SafeAreaView>
    </ScrollView>
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
  container: {
    padding: 10,
    borderRadius: 5,
    flexDirection: "row",
    width: 380,
    height: 120,
    backgroundColor: "#f0f0f0",
  },
  ViewTextSalon: {
    marginStart: 15,
    justifyContent: "center",
  },
  salonText: {
    fontSize: 14,
    width: 120,
  },
  card: {
    margin: 10,
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
  },
  cardImg: {
    borderRadius: 5,
    width: 120,
    height: 100,
    resizeMode: "cover",
  },
  addToCartIcon: {
    marginStart: 80,
    marginTop: 40,
    marginEnd: 20,
  },
});

export default SalonServices;
