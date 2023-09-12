import React from 'react';
import styles from './Statics.module.sass';
const Statics = () => {
  return (
    <div className={styles.main}>
      <div className={styles.first__block}>
        <h1 className={styles.h1__element}>20, 000</h1>
        <p className={styles.p__element}>Completed projects</p>
        <h1 className={styles.h1__element}>10, 000</h1>
        <p className={styles.p__element}>Prototypes</p>
        <h1 className={styles.h1__element}>347</h1>
        <p className={styles.p__element}>Completed projects</p>
      </div>
      <div className={styles.second__block}>
        <h1 className="font-bold text-4xl mb-10">
          Amet, mattis dapibus malesuada arcu dapibus nec efficitur et dictum. In sit odio. Tempus
          leo, dictum.{' '}
        </h1>
        <p>
          Amet, mattis dapibus malesuada arcu dapibus nec efficitur et dictum. In sit odio. Tempus
          leo, dictum. Sit mattis mattis lorem cursus velit sit sed et vitae quam, sed nulla dapibus
          venenatis odio. Venenatis sapien aenean adipiscing lacinia nec lacinia lacinia et quam,
          ultricies. Dictum. Ipsum sodales sit id nec sed sodales mattis mollis quis, pellentesque
          habitasse ex.
        </p>
      </div>
    </div>
  );
};
export default Statics;
