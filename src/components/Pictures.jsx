import React from 'react';
import styles from '../styles/Pictures.module.css';

const click = () => {
  window.location = "/sharerequest1";
}

const click2 = () => {
  window.location = "/sharerequest2";
}

function Pictures() {
  return (
    <>
      <img className={styles.imeg} src="/img/picture.png" alt="Picture 1" />
      <div className={styles.counters}>
        <a className={styles.repost} onClick={click}>
          <img src="/img/share.png" alt="Share Icon" />
          Share
        </a>
        <a className={styles.repost}>
          <img src="/img/close.png" alt="Close Icon" />
          Close
        </a>
      </div>
      <img className={styles.imeg} src="/img/picture2.jpeg" alt="Picture 2" />
      <div className={styles.counters}>
        <a className={styles.repost} onClick={click2}>
          <img src="/img/share.png" alt="Share Icon" />
          Share
        </a>
        <a className={styles.repost}>
          <img src="/img/close.png" alt="Close Icon" />
          Close
        </a>
      </div>
    </>
  );
}

export default Pictures;
