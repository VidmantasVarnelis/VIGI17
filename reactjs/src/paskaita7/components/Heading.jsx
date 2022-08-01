import React from 'react';
// 2budas. importuojami css failai tampa globalus visai aplikacijai
// import './heading.css';
// 3 budas sass.
// import './heading.scss';
// 4 budas. moduliu failai
// import styles from './heading.module.css';
import styles from './heading.module.scss';

const Heading = () => {
  // 1 budas inline styles
  const inlineStyles = {
    backgroundColor: 'blue',
    color: 'white',
  };

  return (
    <h1 className={styles.heading} style={inlineStyles}>
      Heading
    </h1>
  );
};

export default Heading;
