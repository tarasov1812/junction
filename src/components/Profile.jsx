import React from 'react';
import styles from '../styles/Profile.module.css';

function Profile() {
  return (
    <div className={styles.container}>
      <p><span className={styles.bold}>Parent'n name:</span> Jhonatan Ramos</p>
      <p><span className={styles.bold}>Children's name:</span> Muigel Ramos</p>
      <p><span className={styles.bold}>Age:</span> 9</p>
    </div>
  );
}

export default Profile;
