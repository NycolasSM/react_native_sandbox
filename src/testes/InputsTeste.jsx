import React, { useState } from "react";

import {
  View,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  TextInput,
  Text,
} from "react-native";

const InputsTeste = () => {
  const [text, changeText] = useState("Texto Teste");
  const [number, changeNumber] = useState(null);

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <StatusBar
          animated={true}
          backgroundColor="#61dafb"
          barStyle="dark-content"
          showHideTransition="fade"
        />
        <Text>Search</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeNumber}
          value={text}
          placeholder="Oque deseja procurar?"
          keyboardType="text"
          inlineImageLeft="loupe.png"
        />
        <Separator />
        <TextInput
          style={styles.input}
          onChangeText={changeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={changeNumber}
          value={number}
          placeholder="placeholder teste"
          keyboardType="numeric"
        />
        <Text>multiline input</Text>
        <TextInput
          style={styles.input}
          onChangeText={changeNumber}
          value={number}
          multiline
          numberOfLines={4}
          placeholder="placeholder teste"
        />
      </View>
    </SafeAreaView>
  );
};

const Separator = () => <View style={styles.separator} />;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  input: {
    width: 200,
    margin: 12,
    borderWidth: 1,
    padding: 20,
    borderRadius: 8,
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "#737373",
    borderBottomWidth: 1,
  },
});

export default InputsTeste;
