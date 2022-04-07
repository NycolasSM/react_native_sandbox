import React from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  Button,
} from "react-native";

const Buttons = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        showHideTransition="fade"
      />
      <View>
        <Text style={styles.texto}>Teste</Text>
        <Separator/>
        <Text style={styles.texto}>Lorem Ipsum</Text>
        <Button
          title="Clique Aqui"
          onPress={() => Alert.alert("botão pressionado com sucesso")}
          
        />
      </View>
    </SafeAreaView>
  );
};

const Separator = () => <View style={styles.separator} />;

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
    alignSelf: "center",
  },
  statusBar: {
    color: "white",
  },
  separator: {
    marginVertical: 10,
    borderBottomColor: "#737373",
    borderBottomWidth: 1,
  },
  textContainer: {
    alignItems: "center",
  },
  button: {
    borderRadius: 10,
  },
});
