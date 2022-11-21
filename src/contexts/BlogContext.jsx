import { createContext, useContext, useState } from "react";

export const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [blogInfo, setBlogInfo] = useState({
    title: "",
    imageUrl: "",
    content: "",
  });

  return (
    <BlogContext.Provider value={{ blogInfo, setBlogInfo }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlogContext = () => {
  return useContext(BlogContext);
};

export default BlogProvider;
