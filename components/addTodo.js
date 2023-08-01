import React, { useState } from "react";
import { StyleSheet, Text, TextInput, Button, View } from "react-native";

export default function AddTodo({ submitHandler }) {
  const [text, SetText] = useState("");

  const changehandler = (val) => {
    SetText(val);
  };

  return (
    <View>
      <TextInput
        placeholder="New Todo..."
        onChangeText={changehandler}
        style={styles.input}
      />
      <Button
        title="Add todo"
        color="cadetblue"
        onPress={() => {
          submitHandler(text);
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  input: {
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical: 6,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
});
