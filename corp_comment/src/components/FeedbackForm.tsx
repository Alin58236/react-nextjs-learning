import { useState } from "react";
import { MAX_CHARS } from "../lib/constants";

type TFeedbackFormProps = {
  onAddToList: (text: string) => void;
};

const FeedbackForm = ({onAddToList}:TFeedbackFormProps) => {
  
  const [text, setText] = useState("");
  const charCount = MAX_CHARS - text.length;
  const [showValidIndicator, setShowValidIndicator] = useState(false);
  const [showInvalidIndicator, setShowInvalidIndicator] = useState(false);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if(newText.length > MAX_CHARS) return;
    setText(newText);
    setShowValidIndicator(false);
    setShowInvalidIndicator(false);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    //basic validation to check if text includes a hashtag
    //change classname from CSS to show error message
    if(text.includes("#") && text.length >5){
      setShowValidIndicator(true);
    }else{
      setShowInvalidIndicator(true)
    }

    onAddToList(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className={`form ${showValidIndicator ? 'form--valid' : ''} ${showInvalidIndicator ? 'form--invalid' : ''}`}>
      <textarea
        value={text}
        onChange={handleChange}
        id="feedback-textarea"
        placeholder="blabla"
        spellCheck={false}
        maxLength={MAX_CHARS}
      />

      <label htmlFor="feedback-textarea">
        Enter your feedback here. Remember to hashtag the company!
      </label>
      <div>
        <p className="u-italic">{charCount}</p>
        <button type="submit">
          <span>Submit Feedback</span>
        </button>
      </div>
    </form>
  );
};

export default FeedbackForm;
