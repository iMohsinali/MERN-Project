import React, { useState } from "react";
import Question from "./Question";
import data from "./data";
export const App = () => {
  const [questions, setquestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and Answer about Login</h3>
        <section className="info">
          {questions.map((question) => {
            return <Question key={question.id} {...question} />;
          })}
        </section>
      </div>
    </main>
  );
};
