import React, { useState } from "react";
import Post from "./Post";

export default function Posts() {
  const [posts, setPosts] = useState([{ID:1, content:"content1", created:"2020-11-13 01:22"}, {ID:2, content:"content2", created:"2020-11-13 02:22"}]);

  return (
    <>
      {posts.map((post, index) => <Post key={index} post={post} />)}
    </>
  );
};