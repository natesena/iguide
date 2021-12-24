import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Question(props) {
  const [count, setCount] = useState([""]);

  var answerInput;
  if (props.data.answerType === "input") {
    if (props.data.answerLimit === "none") {
      const inputs = count.map((x, i) => {
        const uuidKey = uuidv4();
        return (
          <div key={uuidKey}>
            <input
              value={x}
              onChange={(e) => {
                let updatedInputs = count.map((value, index) => {
                  console.log("index: ", index, " i: ", i);
                  return (index = i ? e.target.value : "blah");
                });
                setCount(updatedInputs);
              }}
            />
            {
              (i = count.length ? (
                <button onClick={() => setCount([...count, ""])}>+</button>
              ) : null)
            }
          </div>
        );
      });

      answerInput = <div>{inputs}</div>;
    } else {
      answerInput = <input />;
    }
  } else if (props.data.answerType === "radio") {
    answerInput = (
      <div>
        {[...props.data.answers].map((value, i) => (
          <div style={{ display: "inline-block" }} key={i}>
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
