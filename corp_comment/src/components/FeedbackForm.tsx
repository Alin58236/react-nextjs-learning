import { useState } from "react";
import { MAX_CHARS } from "../lib/constants";

type TFeedbackFormProps = {
  onAddToList: (text: string) => void;
};

const FeedbackForm = ({onAddToList}:TFeedbackFormProps) => {
  
  const [text, setText] = useState("");
  const charCount = MAX_CHARS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if(newText.length > MAX_CHARS) return;
    setText(newText);
  };


  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onAddToList(text);
    setText("");
  }

  return (
    <form onSubmit={handleSubmit} className="form">
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
