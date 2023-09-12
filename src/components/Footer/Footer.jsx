import React from 'react';
import styles from './Footer.module.sass';
import facebook from './Facebook.png';
import google from './Google +.png';
import telegram from './Telegram.png';
const Footer = () => {
  return (
    <div className={styles.main}>
      <div className="block">
        <h1 className="font-bold text-3xl">Company</h1>
        <p className={styles.p__element}>Dorivit BV, Monitorweg 1, Almere 1322BJ, Netherlands</p>
        <div className="flex">
          <img src={facebook} />
          <img src={google} />
          <img src={telegram} />
        </div>
      </div>
      <div className="block font-bold text-4xl">
        <h1>Id sodales interdum dui mollis non in odio</h1>
        <input type="text" placeholder="E-mail " />
      </div>
    </div>
  );
};
export default Footer;
