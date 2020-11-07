import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Getting the fucking Weather</Text>
      <Text style={styles.textSub}>Developed by SAINTLUXPGW</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#212120"
  },
  text: {
    color: "#fff",
    fontSize: 30
  },
  textSub: {
    color: "#fff",
    fontSize: 12,
    paddingVertical: 30
  }
});
