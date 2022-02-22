import { useEffect, useState } from "react";
import "./App.css";
import { FaAngleDoubleRight } from "react-icons/fa";
const url = "https://course-api.com/react-tabs-project";
function App() {
  const [loading, setloading] = useState(true);
  const [jobs, setjobs] = useState([]);
  const [value, setvalue] = useState(0);
  const fetchjob = async () => {
    const response = await fetch(url);
    const newjobs = await response.json();
    setjobs(newjobs);
    setloading(false);
  };
  useEffect(() => {
    fetchjob();
  }, []);

  if (loading) {
    return (
      <section className="section loading">
        <h1>Loading...</h1>
      </section>
    );
  }

  const { company, duties, dates, title } = jobs[value];
  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <article className="job-info">
          <h3>{title}</h3>
          <h4>{company}</h4>
          <p>{dates}</p>
          {duties.map((e, i) => {
            return (
              <div key={i} className="job-desc">
                <FaAngleDoubleRight className="job-icon" />
                <p>{e}</p>
              </div>
            );
          })}
        </article>
      </div>
    </section>
  );
}

export default App;
