import React from 'react';
import styles from '../styles/Settings.module.css';

function Settings() {
  return (
    <div className={styles.settings}>
      <h2>Settings</h2>
      <p>Consent for Distribution of Photographs</p>
<ul>
<li>I, the undersigned, hereby grant permission for the distribution and use of my photographs in accordance with the terms outlined below:</li>

<li>I acknowledge that the photographs in question may be used by Examfy for promotional, educational, or informational purposes.</li>

<li>I understand that these photographs may be distributed through various media channels, including but not limited to print materials, websites, social media, and presentations.</li>

<li>I agree that my name may be associated with the photographs if deemed appropriate by Examfy.</li>

<li>I release Examfy from any liability whatsoever associated with the use, distribution, or display of these photographs.</li>

<li>I understand that I will not receive any compensation for the use of these photographs.</li>

<li>I have read and understood the terms of this consent form, and I voluntarily agree to its contents.</li>
</ul>
      <form>
  <label>
    <input type="radio" name="respuesta" value="yes" /> YES
  </label>

  <label>
    <input type="radio" name="respuesta" value="no" /> NO
  </label>
  <button type="submit" lassName={styles.submit}>CONFIRM</button>
</form>
    </div>
  );
}

export default Settings;
