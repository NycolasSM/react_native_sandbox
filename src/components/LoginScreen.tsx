import React from "react";

import {
  View,
  Text,
  TextInput,
  Image,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
} from "react-native";

export default function LoginScreen() {
  return (
    <KeyboardAvoidingView style={styles.mainContainer}>
      <View>
        <Image
          style={styles.imageLogo}
          source={require("../assets/img/localsig.png")}
        />
      </View>

      <View style={styles.bodyContainer}>
        <Text style={styles.textTitle}>Relatório de inspeção ETE</Text>

        <TextInput style={styles.input} placeholder="Munícipio" />

        <TextInput style={styles.input} placeholder="ETE" />

        <TouchableOpacity style={styles.button}>
          <Text>Acessar</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  imageLogo: {
    width: 129,
    height: 129,
    marginTop: 41,
    marginBottom: 19,
  },

  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },

  bodyContainer: {
    flex: 1,
    alignItems: "center",
  },

  textTitle: {
    fontWeight: "700",
    fontSize: 20,
  },

  input: {
    fontWeight: "600",
    backgroundColor: "rgba(207, 207, 207, 0.6)",
    width: 243,
    height: 59,
    paddingLeft: 15,
    paddingTop: 21,
    paddingBottom: 21,
    borderRadius: 8,
    borderColor: "#CAC9C9",
    borderWidth: 2,
    marginTop: 40,
  },

  button: {
    backgroundColor: "rgba(0, 158, 219, 0.7)",
    paddingVertical: 19,
    paddingHorizontal: 86,
    borderRadius: 8,
    marginTop: 187,
  },
});
