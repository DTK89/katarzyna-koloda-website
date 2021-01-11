import React from 'react';
import Title from 'components/atoms/Title/Title';
import bgPicture from 'assets/About.jpg';
import styles from './About.module.scss';

const About = () => (
  <div className={styles.wrapper}>
    <Title>O mnie</Title>
    <div className={styles.container}>
      <div className={styles.image} style={{ backgroundImage: `url(${bgPicture})` }}>
        {}
      </div>
      <p>
        {`Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum.`}
      </p>
    </div>
  </div>
);

export default About;
