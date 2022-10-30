import classNames from "classnames";
import React from "react";
import styles from "./style.module.scss";

const TeamCard = ({ title, desc, img, className,indexValue }) => {
  indexValue = ((indexValue + 1) * 3)+'00';
  return (
      <div data-aos="fade-up"  data-aos-delay={indexValue} data-aos-duration="1500" className={classNames(styles.content, className)}>
        <div className={styles.imageDiv}>
          <img src={require('../../Assets/images/'+img)} />
        </div>
        <div className={styles.contentDiv}>
          <p className={styles.title}>{title}</p>
          <p className={styles.desc}>{desc}</p>
        </div>
      </div>
  );
};

export default TeamCard;
