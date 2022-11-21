import {
  getDatabase,
  ref,
  set,
  push,
  onValue,
  remove,
  update,
} from "firebase/database";
import { useEffect, useState } from "react";
import app from "./firebase";

//! ADD BLOG
export const AddNewBlog = (blogInfo, currentUser) => {
  const db = getDatabase(app);
  const blogRef = ref(db, "blog/");
  const newblogRef = push(blogRef);
  set(newblogRef, {
    title: blogInfo.title,
    imageUrl: blogInfo.imageUrl,
    content: blogInfo.content,
    date: new Date().toDateString(),
    email: currentUser.email,
  });
  console.log("eklendi");
};

//! READ BLOG

export const useFetch = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [blogList, setBlogList] = useState();
  useEffect(() => {
    const db = getDatabase(app);
    const blogRef = ref(db, "blog/");
    onValue(blogRef, (snapshot) => {
      const data = snapshot.val();
      const userArray = [];
      for (let id in data) {
        userArray.push({ id, ...data[id] });
      }
      setBlogList(userArray);
      setIsLoading(false);
    });
  }, []);
  return { isLoading, blogList };
};

//! DELETE BLOG

export const DeleteBlog = (id) => {
  const db = getDatabase(app);
  remove(ref(db, "blog/" + id));
};

//! UPDATE BLOG
export const EditBlog = (blogInfo) => {
  const db = getDatabase(app);
  const updates = {};
  updates["blog/" + blogInfo.id] = blogInfo;
  return update(ref(db), updates);
};
