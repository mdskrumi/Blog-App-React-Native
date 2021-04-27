import React, { useContext } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

import { Feather } from "@expo/vector-icons";

import BlogContext from "../context/BlogContext";

const ShowScreen = (props) => {
  const { navigation } = props;
  const blogId = navigation.getParam("id");

  const blogPosts = useContext(BlogContext);

  const blog = blogPosts.data.find((d) => d.id === blogId);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        {blog.title} : {blog.id}
      </Text>
      <Text style={styles.content}>{blog.content}</Text>
    </View>
  );
};

ShowScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Edit", { id: navigation.getParam("id") })
        }
      >
        <Feather
          style={styles.headerRightIcon}
          name="edit-3"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    ),
  };
};
const styles = StyleSheet.create({
  container: {
    margin: 5,
    padding: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  content: {
    fontSize: 16,
  },
  headerRightIcon: {
    marginRight: 15,
  },
});

export default ShowScreen;
