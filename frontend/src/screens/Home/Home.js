import { View, Text, StyleSheet, FlatList } from "react-native";
import SalonItem from "../../components/SalonItem";
import { useForm } from "react-hook-form";
import CustomInput from "../../components/CustomInput";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather"; 
import Entypo from "@expo/vector-icons/Entypo"; 
import AntDesign from "@expo/vector-icons/AntDesign"; 
import myData from "../../DummyData/SalonHomeData";

const Home = ({ navigation }) => {
  const {
    control,
    handleSubmit,
    formState: { error },
  } = useForm();

  return (
    <>
      <View style={styles.topnav}>
        <AntDesign name="menuunfold" size={24} color="black" />
        <Text> G 14/4, Islamabad</Text>
        <View style={styles.topnav2}>
          <Entypo name="bell" size={24} color="black"  />
          <Feather name="shopping-cart" size={24} color="black"  onPress={() => navigation.navigate("Cart")}/>
        </View>
      </View>
      <FlatList
        data={salon}
        ListHeaderComponent={
          <View style={styles.container}>
            <CustomInput
              name="search"
              placeholder="Search here..."
              control={control}
              rules={{
                minLength: {
                  value: 30,
                  message: "30 Characters",
                },
              }}
            />
          </View>
        }
        renderItem={({ item }) => <SalonItem salon={item} />}
        showsVerticalScrollIndicator={false}
      />
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 5,
  },
  topnav: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  topnav2: {
    flexDirection: "row",
    marginTop: 10,
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
  },
});

export default Home;
