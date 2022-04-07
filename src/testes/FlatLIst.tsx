import React from "react";

import { View, Text, FlatList, StyleSheet, SectionList } from "react-native";

export default function FlatListTeste() {
  return (
    <>
      <View style={styles.container}>
        <FlatList
          data={[
            { key: "Registro" },
            { key: "Jacupiranga" },
            { key: "Cajati" },
            { key: "Pariquera" },
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
      <SectionListTeste />
    </>
  );
}

const SectionListTeste = () => {
  return (
    <View style={styles.container}>
    <SectionList
      sections={[
        {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
        {title: 'J', data: ['Jackson', 'James', 'Jillian', 'Jimmy', 'Joel', 'John', 'Julie']},
      ]}
      renderItem={({item}) => <Text style={styles.item}>{item}</Text>}
      renderSectionHeader={({section}) => <Text style={styles.sectionHeader}>{section.title}</Text>}
    />
  </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
  },
});
