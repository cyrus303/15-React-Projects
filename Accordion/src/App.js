import React, { useState } from 'react';
import data from './data';
import Question from './Question';
import SingleQuestion from './Question';
function App() {
  console.log(data);

  const [question, setQuestion] = useState(data);
  return (
    <main>
      <div className="container">
        <h3>Question and answer about login</h3>
        <section className="info">
          {question.map((ques) => {
            return <SingleQuestion key={ques.id} {...ques} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
