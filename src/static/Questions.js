export const Questions = [
  {
    question: "Do you plan on managing your own implementation?",
    answerType: "radio",
    answers: ["yes", "no"],
  },
  {
    question: "URL(s) for inclusion in this project?",
    answerType: "input",
    answerLimit: "none",
  },
  {
    question: "Total number of SKUs?",
    answerType: "input",
    answerLimit: "1",
  },
  {
    question: "Average Monthly Site Traffic?",
    answerType: "input",
    answerLimit: "1",
  },
  {
    question: "Percentage Desktop vs Mobile?",
    answerType: "range",
    range: [0, 100],
    answers: ["Desktop", "Mobile"],
  },
  {
    question: "What is the baseline engagement on your platform?",
    answerType: "input",
    answerLimit: "1",
  },
];
