import { Review } from "./Review";

function App() {
  return (
    <main>
      <section className="App">
        <div>
          <h1>Reveiw App</h1>
          <hr className="underline"></hr>
        </div>
      </section>
      <div className="review">
        <Review />
      </div>
    </main>
  );
}

export default App;
