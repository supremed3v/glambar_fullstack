import { View, Text, Image, FlatList, StyleSheet } from 'react-native'
import React from 'react'
import salonservice from '../../DummyData/SalonServiceData.json'
import salondetail from '../../DummyData/SalonHomeData.json'
import ServiceListItem from '../../components/ServiceListItem'
import Header from './Header'
const salondetails = salondetail[2]


const SalonDetailsPage= ()=>{
  return (
    <View style={styles.page}>
      <FlatList 
      ListHeaderComponent={()=> <Header salondetails={salondetails} />}
      data={salonservice}
    renderItem={({item}) => <ServiceListItem salon={item} />}
    keyExtractor={item => item.id}
      
      />
    </View>
  )
}

const styles = StyleSheet.create({
    page: {
        flex: 1,
    },
    title: {
        fontSize: 35,
        fontWeight: "600",
        marginVertical: 10,
        
    },
    subtitle: {
        fontSize: 15,
        color: 'grey',
    },
    image: {
        width: "100%",
        aspectRatio: 5 / 3
    },
    container: {
        margin: 10,
    },
})

export default SalonDetailsPage;