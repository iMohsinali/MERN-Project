import React, { useEffect, useState } from "react";
import { Loading } from "./Loading";
import { Tours } from "./Tours";
const url = "https://course-api.com/react-tours-project";
function App() {
  const [loading, setloading] = useState(false);
  const [tour, settour] = useState([]);
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
  if (loading) return <Loading />;
  return <Tours tour={tour} />;
}

export default App;
