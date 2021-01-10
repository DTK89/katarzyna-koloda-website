import React, { useState } from 'react';
import Card from 'components/molecules/Card/Card';
import styles from './Tabs.module.scss';
import cardsData from './data';

const Tabs = () => {
  const [cards] = useState(cardsData);
  const [value, setValue] = useState(0);

  const { tabs } = cards[value];
  return (
    <div className={styles.wrapper}>
      {/* Title */}
      <div className={styles.title}>
        <h1>Zabiegi</h1>
        <div className={styles.titleUnderline}>{}</div>
      </div>
      <div className={styles.container}>
        {/* Button container */}
        <div className={styles.containerButtons}>
          {cards.map((item, index) => (
            <button
              key={item.id}
              type="button"
              className={
                index === value ? styles.containerButtonsActive : styles.containerButtonsInactive
              }
              onClick={() => setValue(index)}
            >
              {item.service}
            </button>
          ))}
        </div>

        {/* Grid container */}
        <div className={styles.containerGrid}>
          {tabs.map((item) => (
            <Card
              key={item.id}
              title={item.title}
              image={item.image}
              description={item.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
