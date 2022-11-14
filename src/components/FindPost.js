import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import PostContext from '../contexts/PostContext';
import NoPost from './NoPost';
import Post from './Post';
import PostForm from './PostForm';

export default function FindPost({ action, returnLink }) {
    const params = useParams();
    const { data } = useContext(PostContext);
    if (params?.id === undefined) return <NoPost />;
    const postID = Number(params.id);
    if (postID === undefined) return <NoPost />;

    const post = data.find(x => x?.id === postID);
    switch(action) {
      case 'view': return <Post post={post} isEditable returnLink={ returnLink } />;
      case 'edit': return <PostForm post={post} returnLink={ returnLink } />;
      default: return null;
    };
};