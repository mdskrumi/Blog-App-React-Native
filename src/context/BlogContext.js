import React, { useReducer } from "react";

const BlogContext = React.createContext();

const actions = {
  ADD_NEW_BLOG_POST: "ADD_NEW_BLOG_POST",
  DELETE_BLOG_POST: "DELETE_BLOG_POST",
  UPDATE_BLOG_POST: "UPDATE_BLOG_POST",
};

const reducer = (state, action) => {
  switch (action.type) {
    case actions.ADD_NEW_BLOG_POST: {
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 100000),
          ...action.payload,
        },
      ];
    }
    case actions.DELETE_BLOG_POST: {
      return state.filter((s) => s.id !== action.payload.id);
    }
    case actions.UPDATE_BLOG_POST: {
      const index = state.findIndex((s) => s.id === action.payload.id);
      state[index] = action.payload;
      console.log(index, state[index], state);
      return state;
    }
    default: {
      return state;
    }
  }
};

export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, []);

  const addNewBlogPost = (blog) => {
    dispatch({ type: actions.ADD_NEW_BLOG_POST, payload: blog });
  };

  const deleteBlogPost = (blog) => {
    dispatch({ type: actions.DELETE_BLOG_POST, payload: blog });
  };

  const updateBlogPost = (blog) => {
    dispatch({ type: actions.UPDATE_BLOG_POST, payload: blog });
  };

  return (
    <BlogContext.Provider
      value={{
        data: state,
        addNewBlogPost: addNewBlogPost,
        deleteBlogPost: deleteBlogPost,
        updateBlogPost: updateBlogPost,
      }}
    >
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContext;
