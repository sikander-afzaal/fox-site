import React from "react";
import { Col } from "react-bootstrap";
import styles from "./style.module.scss";

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
    <Col
      // data-aos="fade-up"
      // data-aos-delay={indexValue}
      // data-aos-duration="1500"
      xs={12}
      md={10}
      xl={8}
      className={styles.parentUl}
    >
      {/* <div className={styles.vLine} /> */}
      <p className={styles.title}>{title}</p>
      <ul className={styles.nestedUl}>
        {desc1 && <li>{desc1}</li>}
        {desc2 && <li>{desc2}</li>}
        {desc3 && <li>{desc3}</li>}
        {desc4 && <li>{desc4}</li>}
        {desc5 && <li>{desc5}</li>}
        {desc6 && <li>{desc6}</li>}
      </ul>
    </Col>
  );
};

export default RoadMap;
