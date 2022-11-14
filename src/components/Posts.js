import React, { useContext } from "react";
import Post from "./Post";
import PostContext from "../contexts/PostContext";
import LinkButton from "./LinkButton";
import Actions from "./Actions";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export default function Posts() {
  var { data, isLoading, error } = useContext(PostContext);

  return (
    <>
      <Actions className="new">
        <LinkButton text="Новый пост" link="/posts/new" />
      </Actions>
      {
        data?.length > 0 && data.map((post, index) =>
          <Post key={ post?.id } post={ post } isClickable />
          )
      }
      {
        isLoading && <div className="skeleton"><Skeleton count={5} baseColor="#ffffff" highlightColor="#444" height={80} /></div>
      }
      {
        error && <h1>{ error.toString() }</h1>
      }
    </>
  );
};