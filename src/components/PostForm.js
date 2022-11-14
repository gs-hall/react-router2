import React, { useContext, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { addItem, changeItem } from "../services/postAPI";
import PostContext from "../contexts/PostContext";
import Actions from "./Actions";

export default function PostForm({ post, returnLink }) {
  const params = useParams();
  const [form, setForm] = useState(post ? post : {content: '', id: 0} );
  const navigate = useNavigate();
  const { setIsUpdateRequired } = useContext(PostContext);

  const handleFormChange = (e) => {
    const {name, value} = e.target;
    setForm(prevForm => ({
      ...prevForm, [name]: value
    }));
  };


  const handleFormSubmit = (e) => {
    e.preventDefault();
    const post = {...form};
    if (form.id !== 0) { // add item
      addItem(process.env.REACT_APP_API_URL, post);
    } else { // change item
      changeItem(process.env.REACT_APP_API_URL, post);
    };
    setIsUpdateRequired(true);
    navigate(returnLink);
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <div className="form">
        <input type="text" name="content" value={form.content} onChange={handleFormChange} autoFocus />
          <Actions>
            <Link to={returnLink} className="secondary">Отмена</Link>
            <button type="submit" className="button">{params?.id ? "Сохранить" : "Опубликовать"}</button>
          </Actions>
      </div>
    </form>
  );
};