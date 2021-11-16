import React from "react";

function Question(props) {
  var answerInput;
  console.log("props: ", props);
  if (props.data.answerType === "input") {
    answerInput = <input></input>;
  } else if (props.data.answerType === "binary") {
    answerInput = (
      <div>
        {[...props.data.answers].map((value, i) => (
          <div style={{ display: "inline-block" }}>
            <input
              style={{ display: "inline-block" }}
              type="radio"
              key={i}
              value={value}
            />
            <p style={{ display: "inline-block" }}>{value}</p>
          </div>
        ))}
      </div>
    );
  }
  return (
    <div>
      <h3>
        {props.data.number}: {props.data.question}
      </h3>
      {answerInput}
    </div>
  );
}

export default Question;
