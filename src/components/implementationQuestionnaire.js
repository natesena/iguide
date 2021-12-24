import React from "react";
import Question from "./implementationQuestion";
import { Questions } from "../static/Questions";
import { v4 as uuidv4 } from "uuid";

function ImplementationQuestionnaire() {
  return (
    <div>
      {[...Questions].map((questionData, i) => {
        //create a UUID for question?
        questionData.uuid = uuidv4();
        return (
          <div key={questionData.uuid}>
            <Question data={questionData} number={i}></Question>
          </div>
        );
      })}
    </div>
  );
}
export default ImplementationQuestionnaire;
