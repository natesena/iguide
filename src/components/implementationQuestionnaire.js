import React from "react";
import Question from "./implementationQuestion";
import { Questions } from "../static/Questions";

function ImplementationQuestionnaire() {
  return (
    <div>
      {[...Questions].map((item, i) => (
        <div key={i}>
          <Question data={item}></Question>
        </div>
      ))}
    </div>
  );
}
export default ImplementationQuestionnaire;
