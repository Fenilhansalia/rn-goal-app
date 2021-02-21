import React, { useState } from "react";
import {
  TextInput,
  Text,
  View,
  StyleSheet,
  TouchableHighlight,
  Modal,
  TouchableHighlightBase,
  Button,
} from "react-native";

const GoalInput = (props) => {
  const [entredGoal, setEnteredGoal] = useState("");

  const addGoalHandlers = () => {
    props.addGoalHandler(entredGoal);
    setEnteredGoal("");
  };
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  };
  return (
    <Modal visible={props.visible} animationType="slide">
      <View style={styles.screen}>
        <TextInput
          placeholder="Course Goal"
          style={styles.inputContainer}
          onChangeText={goalInputHandler}
          value={entredGoal}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.buttonCommon}>
            <TouchableHighlight
              style={styles.cancelButton}
              underlayColor="#fff"
              onPress={props.onCancel}
            >
              <Text style={{ color: "#fff" }}>Cancel</Text>
            </TouchableHighlight>
          </View>
          <View  style={styles.buttonCommon}>
            <TouchableHighlight
              style={styles.button}
              underlayColor="#fff"
              onPress={addGoalHandlers}
            >
              <Text style={{ color: "#fff" }}>Add</Text>
            </TouchableHighlight>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    width: 350,
    borderColor: "transparent",
    borderWidth: 1,
    margin: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 35,
    paddingRight: 35,
    borderRadius: 50,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,

    elevation: 15,
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#68a0cf",
    paddingBottom: 15,
    paddingLeft:43,
    paddingTop: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#68a0cf",
  },
  cancelButton: {
    backgroundColor: "#bb2332",
    paddingLeft:34,
    paddingBottom: 15,
    paddingTop: 15,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#bb2332",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "60%",
  },
  buttonCommon:{
      width:"45%"
  }
});

export default GoalInput;
