import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const GoalItems = (props) => {
  return (
    <TouchableOpacity activeOpacity={0.7} onPress={props.deleltHandler.bind(this, props.id)}>
      <View style={styles.listItem}>
        <Text>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  listItem: {
    width:250,
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 17,
    paddingRight: 17,
    marginVertical: 10,
    marginLeft: 20,
    marginRight: 20,
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
});

export default GoalItems;
