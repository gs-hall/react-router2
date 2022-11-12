import React from "react";

export default function Post({ post }) {
  return (
    <div className="post">
      <span>Автор</span>
      <span>{post.created}</span>
      <h2>{post.content}</h2>
    </div>
  );
};