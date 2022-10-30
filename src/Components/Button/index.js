import React from "react";
import { Button } from "react-bootstrap";

const AppButton = ({ title }) => {
  return (
    <div className="app-btn">
      <Button>{title}</Button>
    </div>
  );
};

export default AppButton;
