import React, { useState } from "react";
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  TouchableHighlight,
} from "react-native";

import GoalItem from "./components/GoalItems";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setisAddMode] = useState(false);

  const addGoalHandler = (goalTitle) => {
    if(goalTitle.length === 0){
      return ;
    }
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
    setisAddMode(false);
  };

  const deleltHandler = (goalId) => {
    setCourseGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  };

  const cancelGoalHandler = () => {
    setisAddMode(false);
  };

  return (
    <View style={style.root}>
      <View ><Text style={style.title}>Your Goals</Text></View>
      <GoalInput
        addGoalHandler={addGoalHandler}
        visible={isAddMode}
        onCancel={cancelGoalHandler}
      />

      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItem
            id={itemData.item.id}
            deleltHandler={deleltHandler}
            title={itemData.item.value}
          />
        )}
      />
      <View style={style.buttonPosition}>
        <TouchableHighlight
          style={style.button}
          onPress={() => setisAddMode(true)}
          underlayColor="#fff"
        >
          <Text style={style.text}>+</Text>
        </TouchableHighlight>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  root: {
    padding: 50,
    flex: 1,
    alignItems: "center",
  },
  button: {
    backgroundColor: "#68a0cf",
    paddingBottom: 5,
    paddingLeft: 18,
    paddingTop: 0,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: "#68a0cf",
    width: 60,
    height:60,
  },
  buttonPosition: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 1,
    marginLeft:300
  },
  text:{
    fontSize:40,
    color:"#fff"
  },
  title:{
    fontSize:40,
    
  }
});
