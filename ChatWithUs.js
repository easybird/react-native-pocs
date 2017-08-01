/* eslint import/prefer-default-export: 0 */
// @flow
import React from "react";
import {
  Linking,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert
} from "react-native";

const styles = StyleSheet.create({
  container: {
    padding: 20,
    flexDirection: "row",
    alignContent: "center",
    justifyContent: "space-between",
    backgroundColor: "white"
  },
  textStyle: {
    color: "grey",
    textAlign: "center"
  }
});

export const ChatWithUs = ({
  url = "https://m.me/DeltaworxPermanentie",
  title
}: {
  url: ?string,
  title: string
}) =>
  <TouchableOpacity
    onPress={() => Linking.openURL(url).catch(err => Alert.alert("Error", err))}
    style={styles.container}
  >
    <Text style={styles.textStyle}>
      {url}
    </Text>
  </TouchableOpacity>;
