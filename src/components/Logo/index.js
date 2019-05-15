import React from 'react';

import logoRimac from '../../assets/logo-rimac.png';
import styles from './Logo.module.css';

const logo = () => (
  <div className={styles.Logo}>
    <img src={logoRimac} alt="logo-rimac" />
  </div>
);

export default logo;
