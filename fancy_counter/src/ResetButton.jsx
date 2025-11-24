import React from "react";
import { ResetIcon } from "@radix-ui/react-icons";

const ResetButton = ({ setNumber }) => {
  const handleClick = (event) => {
    console.log("Reset button clicked");
    setNumber(0);
    event.currentTarget.blur(); // pentru a elimina focus-ul de pe buton dupa click
  };

  return (
    <button className="reset-btn" onClick={handleClick}>
      <ResetIcon className="reset-btn-icon" />
    </button>
  );
};

export default ResetButton;
