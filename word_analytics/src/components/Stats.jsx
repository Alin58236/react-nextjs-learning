import React from "react";
import { FACEBOOK__LIMIT, INSTAGRAM__LIMIT } from "../constants";

const Stats = ({text}) => {

  const numberOfCharacters = text.length;
  const numberOfWords = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <section className="stats">
      <Stat number={numberOfWords} label="Words" />
      <Stat number={numberOfCharacters} label="Characters"/>
      <Stat number={INSTAGRAM__LIMIT-numberOfCharacters} label="Instagram"/>
      <Stat number={FACEBOOK__LIMIT-numberOfCharacters} label="Facebook"/>
    </section>
  );
};

//separate React Component in the same file
function Stat({number,label}) {
  return (
    <section className="stat">
      <span className={`stat__number ${number <0 ? "stat__number--limit" : ""}`}>{number}</span>
      <h2 className="second-heading">{label}</h2>
    </section>
  );
}

export default Stats;
