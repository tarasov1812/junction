import React from 'react';
import styles from '../styles/Pictures.module.css';

const click = () => {
  fetch('/sharerequest1', {
    method: 'GET',
  })
  .then(data => data.text())
  .then(window.location = data);
}

const click2 = () => {
  fetch('/sharerequest1', {
    method: 'GET',
  })
  .then(data => data.text())
  .then(window.location = data);
}

function Pictures() {
  return (
    <>
    <img className={styles.imeg} src="/img/picture.png"></img>
    <div className={styles.counters}>
      <a className={styles.repost}>
        <img src="/img/share.png" alt="Like Icon" />
        <a onClick={click}>Share</a>
      </a>
      <a className={styles.repost}>
        <img src="/img/close.png" alt="Share Icon" />
        <span>Close</span>
      </a>
    </div>
    <img className={styles.imeg} src="/img/picture2.jpeg"></img>
    <div className={styles.counters}>
      <a className={styles.repost}>
        <img src="/img/share.png" alt="Like Icon" />
        <a onClick={click2}>Share</a>
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
