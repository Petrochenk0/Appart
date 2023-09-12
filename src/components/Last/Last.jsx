import React from 'react';
import styles from './Last.module.sass';
const Last = () => {
  return (
    <div className={styles.block}>
      <div className={styles.blocks}>
        <h1 className={styles.heading}>Branding</h1>
        <p className={styles.p__element}>
          Quam, tortor, interdum consectetur eleifend integer et. Accumsan vulputate efficitur in
          amet, vestibulum ornare morbi accumsan leo, est. Consectetur ultricies.
        </p>
      </div>
      <div className={styles.blocks}>
        <h1 className={styles.heading}>Web-apps</h1>
        <p className={styles.p__element}>
          Malesuada efficitur mattis id mattis aenean interdum lectus quam, dapibus nec augue
          vulputate leo, ornare elit. Pulvinar sed quam, arcu pulvinar nisi ipsum quis, sodales
          molestie ex.
        </p>
      </div>
      <div className={styles.blocks}>
        <h1 className={styles.heading}>Design</h1>
        <p className={styles.p__element}>
          Cras amet, sed sapien orci, leo, sit ornare risus tortor, ex. Mauris non orci, sed elit.
          Cursus ex. Aenean ipsum dolor augue tempus et molestie ipsum adipiscing leo, sit interdum
          venenatis odio.
        </p>
      </div>
      <div className={styles.blocks}>
        <h1 className={styles.heading}>Strategy</h1>
        <p className={styles.p__element}>
          Quam, tortor, interdum consectetur eleifend integer et. Accumsan vulputate efficitur in
          amet, vestibulum ornare morbi accumsan leo, est. Consectetur ultricies.
        </p>
      </div>
    </div>
  );
};
export default Last;
