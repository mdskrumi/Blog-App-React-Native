import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import BlogContext from "../context/BlogContext";

const CreateScreen = (props) => {
  const { navigation } = props;
  const { addNewBlogPost } = useContext(BlogContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  return (
    <View>
      <Text style={styles.headerTitle}>Create Blog</Text>
      <TextInput
        style={styles.textInput}
        placeholder={"Blog Title"}
        autoCapitalize="words"
        autoCorrect={false}
        value={title}
        onChangeText={(val) => setTitle(val)}
      />
      <TextInput
        style={styles.textInput}
        placeholder={"Blog Content"}
        autoCapitalize="none"
        autoCorrect={false}
        multiline={true}
        blurOnSubmit={true}
        value={content}
        onChangeText={(val) => setContent(val)}
      />

      <TouchableOpacity
        onPress={() => {
          addNewBlogPost({ title, content });
          return navigation.navigate("Index");
        }}
      >
        <Text style={styles.customizeButton}>Publish The Blog</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerTitle: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  },
  textInput: {
    backgroundColor: "#ebebeb",
    marginTop: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    fontSize: 16,
    borderWidth: 1,
    borderRadius: 10,
  },
  customizeButton: {
    textAlign: "center",
    fontSize: 16,
    fontWeight: "bold",
    marginVertical: 15,
    padding: 10,
    borderWidth: 1,
    borderRadius: 30,
    maxWidth: 150,
    alignSelf: "center",
  },
});

export default CreateScreen;
