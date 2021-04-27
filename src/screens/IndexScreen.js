import React, { useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Button,
  TouchableOpacity,
} from "react-native";

import BlogContext from "../context/BlogContext";

import { Feather } from "@expo/vector-icons";

const IndexScreen = (props) => {
  const { navigation } = props;
  const { data, deleteBlogPost } = useContext(BlogContext);

  return (
    <>
      <Text style={styles.header}> Blogs Found: {data.length}</Text>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Show", { id: item.id });
              }}
            >
              <View style={styles.blogList}>
                <Text>{item.title}</Text>
                <TouchableOpacity
                  onPress={() => {
                    deleteBlogPost(item);
                  }}
                >
                  <Feather name="trash-2" size={24} color="red" />
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

IndexScreen.navigationOptions = ({ navigation }) => {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate("Create")}>
        <Feather
          style={styles.headerRightIcon}
          name="plus"
          size={24}
          color="black"
        />
      </TouchableOpacity>
    ),
  };
};

const styles = StyleSheet.create({
  header: {
    textAlign: "center",
  },
  blogList: {
    justifyContent: "space-between",
    margin: 10,
    flexDirection: "row",
    borderTopWidth: 0.1,
    borderTopLeftRadius: 10,
    borderBottomWidth: 2,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    borderLeftWidth: 2,
    padding: 10,
  },
  headerRightIcon: {
    marginRight: 15,
  },
});

export default IndexScreen;
