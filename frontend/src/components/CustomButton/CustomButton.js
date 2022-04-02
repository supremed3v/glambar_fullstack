import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";

const CustomButton = ({
  onPress,
  text,
  type = "PRIMARY",
  bgColor,
  fgColor,
}) => {
  return (
    <Pressable
      onPress={onPress}
      style={[
        styles.container,
        styles[`container_${type}`],
        bgColor ? { backgroundColor: bgColor } : {},
      ]}
    >
      <Text style={[styles.text, styles[`text_${type}`], fgColor ? {color: fgColor} : {} ]}>{text}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "80%",
    padding: 10,
    marginVertical: 11,

    alignItems: "center",
    borderRadius: 15,
  },

  container_PRIMARY: {
    backgroundColor: "#3b71f3",
  },

  container_TERTIARY: {},

  text: {
    fontWeight: "bold",
    color: "white",
  },

  text_TERTIARY: {
    color: 'gray'
  },

  text_SECONDARY: {
    color: "white"
  }
});

export default CustomButton;
