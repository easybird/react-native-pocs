/* eslint import/prefer-default-export: 0 */
// @flow
import React from "react";
import {
  Linking,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Alert,
  Platform
} from "react-native";
import AppLink from "react-native-app-link";

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

const onPress = () => {
  const url =
    Platform.OS === "ios"
      ? "fb-messenger-public://user-thread/1402123856538531"
      : "fb-messenger://user-thread/1402123856538531";
  const appName =
    Platform.OS === "ios" ? "fb-messenger-public" : "fb-messenger";
  AppLink.maybeOpenURL(url, {
    appName,
    appStoreId: "id454638411",
    playStoreId: "com.facebook.orca"
  })
    .then(() => {
      // do stuff
    })
    .catch(err => {
      // handle error
    });
};
export const ChatWithUsPart2 = ({
  url = "ChatWithUsPart2",
  title
}: {
  url: ?string,
  title: string
}) =>
  <TouchableOpacity onPress={onPress} style={styles.container}>
    <Text style={styles.textStyle}>
      {url}
    </Text>
  </TouchableOpacity>;
