import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(false);
  const [tour, settour] = useState([]);

  const removeTour = (id) => {
    const newtour = tour.filter((t) => t.id !== id);
    settour(newtour);
  };

  const fetchtour = async () => {
    setloading(true);
    try {
      const response = await fetch(url);
      const tours = await response.json();
      setloading(false);
      settour(tours);
      console.log(tours);
    } catch (error) {
      setloading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchtour();
  }, []);
  if (loading)
    return (
      <main>
        <Loading />;
      </main>
    );
  if (tour.length === 0) {
    return (
      <main>
        <div className="title">
          <h2>no tours left</h2>
          <button className="btn" onClick={() => fetchtour()}>
            refresh
          </button>
        </div>
      </main>
    );
  }
  return (
    <main>
      <Tours tour={tour} removeTour={removeTour} />
    </main>
  );
}

export default App;
