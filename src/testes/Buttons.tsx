import React from "react";

import { View, Text, SafeAreaView, StyleSheet, StatusBar } from "react-native";

const Buttons = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle='dark-content'
        showHideTransition='fade'
      />
      <View>
        <Text style={styles.texto}>Teste</Text>
      </View>
    </SafeAreaView>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  texto: {
    color: "black",
    fontSize: 30,
  },
  statusBar: {
    color: "white",
  },
});
