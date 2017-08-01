import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChatWithUs } from "./ChatWithUs";
import { ChatWithUsPart2 } from "./ChatWithUsPart2";
export default class App extends React.Component {
  parseUrl = url =>
    url && url.replace("https://www.messenger.com/t/", "https://m.me/");

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Test messenger</Text>
        </View>
        <View>
          <Text>Open up App.js to start working on your app!</Text>
          <Text>Changes you make will automatically reload.</Text>
          <ChatWithUs url={"https://www.messenger.com/t/1402123856538531"} />
          <ChatWithUs />
          <ChatWithUsPart2 />
          <ChatWithUs
            url={"fb-messenger-public://user-thread/1402123856538531"}
          />
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
