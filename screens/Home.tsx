import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Home() {
  /* 

	need to create a hook that will check if a refresh token resides 
	in the application if not then redirect to sign in/register

	on load, make a request to the server for playlist info and possibly cache it 

	*/

  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <Text>Here's some more text.</Text>
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
