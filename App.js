import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  FlatList,
  TouchableOpacity,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Header from "./components/header";
import TodoItem from "./components/todoItem";
import AddTodo from "./components/addTodo";
import Sandbox from "./components/sandbox";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create a cross plateform app", key: "2" },
    { text: "play fifa", key: "3" },
  ]);

  const pressHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo.key != key);
    });
  };

  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => {
        return [
          ...prevTodos,
          { text: text, key: (prevTodos.length + 1).toString() },
        ];
      });
    } else {
      Alert.alert("Oops", "Todos must be over 3 chars long", [
        {
          text: "Understood",
          onPress: () => {
            console.log("alert closed");
          },
        },
      ]);
    }
  };

  return (
    // <Sandbox />
    <TouchableWithoutFeedback
      onPress={() => {
        Keyboard.dismiss();
      }}>
      <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    padding: 40,
    flex: 1,
  },
  list: {
    flex: 1,
    marginTop: 20,
  },
});
