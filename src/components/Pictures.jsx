import React from 'react';
import styles from '../styles/Pictures.module.css';


const el = document.getElementById("root");
el.getAttribute('data-param');


function Pictures() {
  return (
    <>
    <img className={styles.imeg} src="/img/picture.png"></img>
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
        <span>{el.getAttribute('data-param')}</span>
      </a>
    </div>
    <img className={styles.imeg} src="/img/picture.png"></img>
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

export default Pictures;
