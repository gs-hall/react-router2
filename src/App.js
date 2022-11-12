import React from "react";
import CreatePostForm from "./components/CreatePostForm";
import Posts from "./components/Posts";
import "./css/main.css";

function App() {
  return (
    <div className="container">
      <CreatePostForm />
      <Posts />
    </div>
  );
}

export default App;
