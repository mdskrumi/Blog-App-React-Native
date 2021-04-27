import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";

import BlogContext from "../context/BlogContext";

const EditScreen = (props) => {
  const { navigation } = props;
  const id = navigation.getParam("id");
  const { data, updateBlogPost } = useContext(BlogContext);

  const blog = data.find((d) => d.id === id);
  const [title, setTitle] = useState(blog.title || "");
  const [content, setContent] = useState(blog.content || "");

  return (
    <View>
      <Text style={styles.headerTitle}>Edit Blog</Text>
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
          updateBlogPost({ id, title, content });
          return navigation.pop();
        }}
      >
        <Text style={styles.customizeButton}>Update The Blog</Text>
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

export default EditScreen;
