import React from "react";
import classes from "./AnswerItem.module.css";

const AnswerItem = (props) => {
  const answerClass = [classes["answer-item"]];

  if (props.state) {
    answerClass.push(classes[props.state]);
  }

  return (
    <li
      className={answerClass.join(" ")}
      onClick={() => props.onAnswerClick(props.answer.id)}
    >
      {props.answer.text}
    </li>
  );
};

export default AnswerItem;
