import React from 'react';
import Button from '../Button';
import first__home from './first-home.png';
import second__home from './second-home.png';
import styles from './Center.module.sass';
const Center = () => {
  return (
    <div className={styles.main}>
      <div className={styles.space__between}>
        <div className="block">
          <h2>Et odio</h2>
          <p className={styles.p__element}>
            Mauris eget nec nulla dolor ex. Sodales luctus pellentesque cras ornare lorem luctus
            lectus sed consectetur quam, est. Libero, odi
          </p>
          <Button />
        </div>
        <img className={styles.image} src={first__home} />
      </div>
      <div className={styles.space__between}>
        <img className={styles.image} src={second__home} />
        <div className="block">
          <h2>Integer dapibus dictum</h2>
          <p className={styles.p__element}>
            it pulvinar tempus amet dolor dui vulputate tortor, luctus lorem in nunc eleifend ipsum
            justo et venenatis dictumst.{' '}
          </p>
          <Button />
        </div>
      </div>
    </div>
  );
};
export default Center;
