import { queryAllByTitle } from "@testing-library/react";
import React from "react";
import { Accordion } from "react-bootstrap";
// import  home  from "../../Assets/content.json"
const FAQ = ({id, title, desc, margin}) => {
  // console.log('Json', home );
  return (
    // <div data-aos="fade-up"  data-aos-duration="1500">

    <Accordion.Item eventKey={id}>
      <Accordion.Header>{title}</Accordion.Header>
      <Accordion.Body>
        {desc}
      </Accordion.Body>
    </Accordion.Item>
    // </div>
  );
};

export default FAQ;
