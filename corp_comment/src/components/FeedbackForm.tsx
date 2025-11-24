import { useState } from "react";
import { MAX_CHARS } from "../lib/constants";

const FeedbackForm = () => {
  const [text, setText] = useState("");
  const charCount = MAX_CHARS - text.length;

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newText = event.target.value;
    if(newText.length > MAX_CHARS) return;
    setText(newText);
  };

  return (
    <form className="form">
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
