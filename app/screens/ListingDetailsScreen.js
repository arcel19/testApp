import React from "react";
import { View, Image, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import ListItem from "../components/ListItem";
import colors from "../config/colors";

function ListingDetailsScreen(props) {
  return (
    <View>
      <Image style={styles.image} source={require("../assets/OIF.jpg")} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red Jacket </AppText>
        <AppText style={styles.price}> $200</AppText>
        <View style={styles.userContainer}>
        <ListItem
        image={require("../assets/favicon.png")}
        title="Condition"
        subTitle="New"
        />
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer:{
    padding:20,
  },
  title:{
    fontSize:24,
    fontWeight:"500"
  },
  price:{
    color:colors.secondary,
    fontWeight:"bold",
    fontSize:20,
    marginVertical:10
  },
  userContainer:{
    marginVertical:30 
  }
});

export default ListingDetailsScreen;
