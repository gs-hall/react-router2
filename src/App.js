import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostForm from "./components/PostForm";
import Posts from "./components/Posts";
import "./css/main.css";
import PostProvider from "./components/PostProvider";
import FindPost from "./components/FindPost";
import Page404 from "./components/Page404";

function App() {
  return (
    <PostProvider>
      <BrowserRouter>
        <div className="container">
          <Routes>
            <Route path="/" exact element={ <Posts /> } />
            <Route path="/posts/new" exact element={ <PostForm returnLink="/" /> } />
            <Route path="/posts/:id" exact element={ <FindPost action="view" returnLink="/" /> } />
            <Route path="/posts/:id/edit" exact element={ <FindPost action="edit" returnLink="/" /> } />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>
      </BrowserRouter>
    </PostProvider>
  );
}

export default App;
