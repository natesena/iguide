import React from "react";

function Question(props) {
  var answerInput;
  console.log("props: ", props);
  if (props.data.answerType === "input") {
    answerInput = <input></input>;
  } else if (props.data.answerType === "radio") {
    answerInput = (
      <div>
        {[...props.data.answers].map((value, i) => (
          <div style={{ display: "inline-block" }}>
            <input
              style={{ display: "inline-block" }}
              type="radio"
              key={i}
              value={value}
              name="binary"
            />
            <p style={{ display: "inline-block" }}>{value}</p>
          </div>
        ))}
      </div>
    );
  } else if (props.data.answerType === "range") {
    answerInput = (
      <div>
        <p style={{ display: "inline-block" }}>{props.data.answers[0]}</p>
        <div style={{ display: "inline-block" }}>
          <input
            id="typeinp"
            type="range"
            min="0"
            max="100"
            defaultValue="50"
            step="1"
          />
        </div>
        <p style={{ display: "inline-block" }}>{props.data.answers[1]}</p>
      </div>
    );
  }
  return (
    <div>
      <h3>
        {props.number + 1}: {props.data.question}
      </h3>
      {answerInput}
    </div>
  );
}

export default Question;
