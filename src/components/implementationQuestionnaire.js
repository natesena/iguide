import React from "react";
import Question from "./implementationQuestion";
import { Questions } from "../static/Questions";

function ImplementationQuestionnaire() {
  return (
    <div>
      {[...Questions].map((questionData, i) => (
        <div key={i}>
          <Question data={questionData}></Question>
        </div>
      ))}
    </div>
  );
}
export default ImplementationQuestionnaire;
