import React from "react";
import { StyleSheet, View } from "react-native";

export const Bar = ({ barColor }) => {
  return (
    <View style={BarStyles.barContainer}>
      <View
        style={[
          BarStyles.bar,
          { backgroundColor: barColor ? barColor : "#BDD1DC" },
        ]}
      />
    </View>
  );
};

const BarStyles = StyleSheet.create({
  barContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  bar: {
    width: 60,
    height: 8,
    borderRadius: 5,
    marginVertical: 20,
    marginBottom: 10,
  },
});
