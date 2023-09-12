import React from 'react';
import Button from '../Button';
import styles from './Starting.module.sass';
import background from './back.jpg';
const Starting = () => {
  return (
    <div>
      <div
        className={styles.image}
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          height: '120vh',
          width: '100%',
        }}>
        <nav className={styles.navigation}>
          <h1 className="text-5xl p-10 font-bold">Company</h1>
          <ul className={styles.ul__element}>
            <li className={styles.li__element}>Portfolio</li>
            <li className={styles.li__element}>Team</li>
            <li className={styles.li__element}>About</li>
            <li className={styles.li__element}>Contanct</li>
          </ul>
        </nav>
        <div className={styles.div__block__element}>
          <h1 className={styles.heading}>
            We produce <br /> the best products
          </h1>
          <p className={styles.p__element}>
            Mattis quam, lectus et justo amet, tortor, lectus dapibus est. Habitasse efficitur
            sodales vel est.
          </p>
          <button className="py-5 px-10 text-black bg-white text-2xl hover:bg-black-700 transition-opacity ease">
            More
          </button>
        </div>
      </div>
    </div>
  );
};
export default Starting;
