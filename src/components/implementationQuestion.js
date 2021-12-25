import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

function Question(props) {
  const [inputs, setInputs] = useState([{ value: "" }]);

  var answerInput;
  if (props.data.answerType === "input") {
    if (props.data.answerLimit === "none") {
      const inputBlock = inputs.map((input, i) => {
        const uuidKey = uuidv4();
        input.key = input.key ? input.key : uuidKey;
        console.log(
          "input: ",
          input,
          "inputs.length: ",
          inputs.length,
          " i: ",
          i
        );
        return (
          <div key={uuidKey}>
            <input
              value={input.value}
              onChange={(e) => {
                let updatedInputs = inputs.map((nput, index) => {
                  console.log("updated key: ", nput.key);
                  return nput.key == uuidKey
                    ? { value: e.target.value, key: nput.key }
                    : { value: "error", key: nput.key };
                });
                setInputs(updatedInputs);
              }}
            />
          </div>
        );
      });

      answerInput = (
        <div>
          {inputBlock}
          <button onClick={() => setInputs([...inputs, { value: "" }])}>
            +
          </button>
        </div>
      );
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
