import React from "react";
import { Col } from "react-bootstrap";
import styles from "./style.module.scss";
import sign from "../../Assets/images/wood.png";

const RoadMap = ({
  desc1,
  desc2,
  desc3,
  desc4,
  desc5,
  desc6,
  title,
  indexValue,
}) => {
  console.log(indexValue, "index value here");
  indexValue = (indexValue + 1) * 2 + "00";

  return (
    <div
      data-aos="fade-up"
      data-aos-delay={indexValue}
      data-aos-duration="1500"
      className={styles.roadItem}
    >
      <div className={styles.textPart}>
        <span className={styles.vLine} />
        <div className={styles.titlePart}>
          <img src={sign} alt="" className={styles.sign} />
          <p className={styles.title}>{title}</p>
        </div>
        <ul className={styles.nestedUl}>
          {desc1 && <li>{desc1}</li>}
          {desc2 && <li>{desc2}</li>}
          {desc3 && <li>{desc3}</li>}
          {desc4 && <li>{desc4}</li>}
          {desc5 && <li>{desc5}</li>}
          {desc6 && <li>{desc6}</li>}
        </ul>
      </div>
    </div>
  );
};

export default RoadMap;
