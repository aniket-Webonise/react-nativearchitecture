import { Ionicons } from "@expo/vector-icons";
import { AppLoading } from "expo";
import { Asset } from "expo-asset";
import * as Font from "expo-font";
import React, { useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";
import { Provider } from "react-redux";
import AppNavigator from "./src/navigation/AppNavigator";
import store from "./src/reducer/index";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

export default function App(props) {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  async function loadResourcesAsync() {
    await Promise.all([
      Asset.loadAsync([
        require("./assets/images/robot-dev.png"),
        require("./assets/images/robot-prod.png")
      ]),
      Font.loadAsync({
        ...Ionicons.font,
        "space-mono": require("./assets/fonts/SpaceMono-Regular.ttf")
      })
    ]);
  }

  function handleLoadingError() {
    // TODO: handle error
  }

  function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
  }

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  }
  return (
    <Provider store={store}>
      <View style={styles.container}>
        {Platform.OS === "ios" && <StatusBar barStyle="default" />}
        <AppNavigator />
      </View>
    </Provider>
  );
}
