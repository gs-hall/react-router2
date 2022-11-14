import React, { useContext } from "react";
import moment from "moment"; 
import { useNavigate } from "react-router-dom";
import classnames from "classnames";
import ReturnButton from "./ReturnButton";
import LinkButton from "./LinkButton";
import Actions from "./Actions";
import NoPost from "./NoPost";
import { deleteItem } from "../services/postAPI";
import PostContext from "../contexts/PostContext";

export default function Post({ post, isClickable, isEditable, returnLink }) {
  const navigate = useNavigate();
  const { setIsUpdateRequired } = useContext(PostContext);

  if (!post?.id) return <NoPost />;
  const date = new Date(post?.created);
  const datetime = moment(date).format("DD.MM.yyyy HH:MM");
  const postUrl = "/posts/" + post?.id;

  const handleDelete = (post) => {
    deleteItem(process.env.REACT_APP_API_URL, post.id);
    setIsUpdateRequired(true);
    navigate(returnLink);
  };

  return (
    <>
      <div className={classnames("post", { "clickable": isClickable })} onClick={ isClickable ? (() => navigate(postUrl)) : null }>
        <span>{datetime}</span>
        <h2>{ post?.content }</h2>
          {
          isEditable &&
          <Actions>
            <LinkButton text="Изменить" link={ postUrl + "/edit" } />
            <LinkButton text="Удалить" onClick={ () => handleDelete(post) } className="alert" />
          </Actions>
          }
      </div>
      {!isClickable && <ReturnButton />}
    </>
  );
};