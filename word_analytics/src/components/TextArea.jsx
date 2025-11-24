import React from "react";
import { useState } from "react";
import Warning from "./Warning";

const TextArea = ({text,setText}) => {
  
  const [warningText, setWarningText] = useState("");
  
  //but how do we lift state up?


  const handleChangeText = (e) => {
    let newText = e.target.value;
    

    //basic valdiation
    if (newText.includes("<script>") || newText.includes("</script>")) {
      newText = newText.replace(/<script>/gi, "").replace(/<\/script>/gi, "");
      setWarningText("Script tags are not allowed.");
    }  else if (newText.includes("`")) {
      newText = newText.replace(/`/g, "&#x60;");
      setWarningText("Backticks are not allowed.");
    } else {
      setWarningText("");
    }

    setText(newText);
    
  };

  return (
    <div className="textarea">
      <textarea
        value={text}
        spellCheck="false"
        placeholder="Enter your text..."
        onChange={(e) => handleChangeText(e)}
      />
      {warningText ? <Warning warningText={warningText} /> : null}
      
    </div>
  );
};

export default TextArea;
