import { useNavigationContainerRef } from "@react-navigation/native";
import React from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function Login() {
  // mostly temp code tbh
  const navigationRef = useNavigationContainerRef();

  return (
    <View style={styles.container}>
      <Text>This is the login section of the application</Text>
      <Button
        title="Go to Details... again"
        onPress={() => {
          /*navigationRef.push("Details") */
          console.log("change");
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
