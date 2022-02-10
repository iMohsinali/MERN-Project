import { useState } from "react";
import Data from "./Data";
import List from "./List";

function App() {
  const [people, setpeople] = useState(Data);
  const removepeople = (id) => {
    const newpeope = people.filter((p) => p.id !== id);
    setpeople(newpeope);
  };
  return (
    <main>
      <section className="container">
        <h1>Birthday App</h1>
        <div>
          {people.map((p) => {
            return <List key={p.id} {...p} removepeople={removepeople} />;
          })}
        </div>
        <button className="clear-btn" onClick={() => setpeople([])}>
          {" "}
          Clear All
        </button>
      </section>
    </main>
  );
}

export default App;
