import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ChatWithUs } from "./ChatWithUs";
import { ChatWithUsPart2 } from "./ChatWithUsPart2";

const MESSENGER_THREAD_ID = "1402123856538531";

export default class App extends React.Component {
  parseUrl = url =>
    url && url.replace("https://www.messenger.com/t/", "https://m.me/");

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Test deep linking to messenger</Text>
        </View>
        <View style={{ margin: 20 }}>
          <Text>
            Open up App.js and change the MESSENGER_THREAD_ID to a thread that
            belongs to you.
          </Text>
          <ChatWithUs
            url={`https://www.messenger.com/t/${MESSENGER_THREAD_ID}`}
          />
          <ChatWithUs url={`https://m.me/${MESSENGER_THREAD_ID}`} />
          <ChatWithUsPart2 url={MESSENGER_THREAD_ID} />
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
