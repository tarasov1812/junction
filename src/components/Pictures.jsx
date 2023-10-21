import React from 'react';
import styles from '../styles/Pictures.module.css';

function Pictures() {
  return (
    <>
    <img className={styles.imeg} src="/img/picture.png"></img>
    <div className={styles.counters}>
      <a href="/img/picture.png" className={styles.repost}>
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

export default Pictures;
