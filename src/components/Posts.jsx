import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import styles from '../styles/Posts.module.css';

function Posts() {
  const messages = useSelector((state) => state.posts.data);
  const [isLoading, setIsloading] = useState(true);
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    fetch('/pictures.json')
      .then((response) => response.json())
      .then((picturesData) => {
        setPictures(picturesData.picturesMessage);
        setIsloading(false);
      })
      .catch((error) => console.error('Error loading images', error));
  }, []);

  return (
    <>
    <img src="/img/picture.png"></img>
    <div className={styles.counters}>
      <a className={styles.repost}>
        <img src="/img/download.png" alt="Repost Icon" />
        <span>Download</span>
      </a>
      <a className={styles.repost}>
        <img src="/img/share.png" alt="Like Icon" />
        <span>Share</span>
      </a>
      <a className={styles.repost}>
        <img src="/img/close.png" alt="Share Icon" />
        <span>Close</span>
      </a>
    </div>
    </>
  );
}

export default Posts;
