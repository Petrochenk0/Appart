import React from 'react';
import styles from './JElement.module.sass';
const JElement = () => {
  return (
    <div className={styles.main}>
      <h4>Quoute</h4>
      <h2 className={styles.w1000}>
        Accumsan vulputate efficitur in amet, vestibulum ornare morbi accumsan leo, est. Consectetur
        ultricies. Sapien est. Dictumst. Sapien habitasse interdum in amet, lectus molestie vel ut.
        Malesuada efficitur mattis id mattis aenean interdum lectus quam, dapibus nec augue
        vulputate leo, ornare elit.{' '}
      </h2>
      <p>Alex Lee / Co-founder & SEO</p>
    </div>
  );
};
export default JElement;
