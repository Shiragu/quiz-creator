import React from "react";
import classes from "./AnswersList.module.css";
import AnswerItem from "./AnswerItem";

const AnswersList = (props) => (
  <ul className={classes["answers-list"]}>
    {props.answers.map((answer, index) => {
      return (
        <AnswerItem
          answer={answer}
          key={index}
          onAnswerClick={props.onAnswerClick}
          state={props.state ? props.state[answer.id] : null}
        />
      );
    })}
  </ul>
);

export default AnswersList;
