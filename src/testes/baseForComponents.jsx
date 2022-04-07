import React from "react";

import { View, SafeAreaView, StyleSheet, Text, StatusBar } from "react-native";

const Teste = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle="dark-content"
          showHideTransition="fade"
        />
        <Text>Teste</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default Teste;
