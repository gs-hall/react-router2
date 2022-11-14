import React from 'react'
import PostContext from '../contexts/PostContext';
import useFetch from '../hooks/useFetch';

export default function PostProvider(props) {
  return (
    <PostContext.Provider value={ useFetch(process.env.REACT_APP_API_URL) }>
      {props.children}
    </PostContext.Provider>
  );
};
