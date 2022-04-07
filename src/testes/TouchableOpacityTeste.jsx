import React, { useState } from "react";

import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  Alert,
  Image,
  TouchableOpacity,
} from "react-native";

const Buttons = () => {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  const decrementCount = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="#61dafb"
        barStyle="dark-content"
        showHideTransition="fade"
      />
      <Text style={{ fontSize: 30 }}>{count}</Text>
      <View>
        <Text style={styles.texto}>TouchableOpacity</Text>
        <Separator />
        <View style={styles.countButtonsContainer}>
          <AppButton
            onPress={incrementCount}
            title={"increment"}
            icon={
              "https://www.pngkit.com/png/full/670-6706313_plus-button-green.png"
            }
            color="#228B22"
          />
          <AppButton
            onPress={decrementCount}
            title={"decrement"}
            icon={
              "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Ambox_emblem_minus.svg/2048px-Ambox_emblem_minus.svg.png"
            }
            color="#B22222"
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const AppButton = ({ onPress, title, icon, color = "#009688" }) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer, { backgroundColor: color }]}
      activeOpacity={0.8}
    >
      <Image
        style={{ height: 40, width: 40 }}
        source={{
          uri: icon,
        }}
      />
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
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
  buttonContainer: {
    elevation: 8,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "baseline",
    backgroundColor: "#009688",
  },
  buttonText: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
  countButtonsContainer: {
    flexDirection: "row",
  },
});
