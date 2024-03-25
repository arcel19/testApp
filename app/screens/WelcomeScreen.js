import React from "react";
import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import AppButton from "../components/AppButton";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      blurRadius={5}
      style={styles.background}
      source={require("../assets/background.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/logo.png")} />
        <Text style={styles.text}> ArcelCapital </Text>
      </View>
      <View style={styles.buttonContainer}>
        <AppButton title="login" />
        <AppButton
          title="register"
          color="secondary"
          onPress={() => console.log("hello")}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  text: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
    color: "white",
  },

  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },

  buttonContainer: {
    padding: 20,
    width: "100%",
  },
});

export default WelcomeScreen;
