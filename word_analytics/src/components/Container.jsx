import Stats from "./Stats";
import TextArea from "./TextArea";
import { useState } from "react";

const Container = () => {

  const [text, setText] = useState("");

  return (
    <main className="container">
      <TextArea text={text} setText={setText} />
      <Stats text={text}/>
    </main>
  );
};

export default Container;
