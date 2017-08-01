import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Clean branch, checkout my other branches
          </Text>
        </View>
        <View style={{ margin: 20 }}>
          <Text>Check out my branches to see my POC's, this one is empty</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "space-around"
  },
  title: {
    fontSize: 18
  }
});
