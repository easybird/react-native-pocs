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

const onPress = url => {
  const link =
    Platform.OS === "ios"
      ? `fb-messenger-public://user-thread/${url}`
      : `fb-messenger://user-thread/${url}`;
  const appName =
    Platform.OS === "ios" ? "fb-messenger-public" : "fb-messenger";
  AppLink.maybeOpenURL(link, {
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
  url,
  title = "This link works For iOS --- Not For Android Yet.."
}: {
  url: ?string,
  title: string
}) =>
  <TouchableOpacity onPress={() => onPress(url)} style={styles.container}>
    <Text style={styles.textStyle}>
      {title}
    </Text>
  </TouchableOpacity>;
