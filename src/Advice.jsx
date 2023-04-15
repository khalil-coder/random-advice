import { useState, useEffect } from "react";
import axios from "axios";

function Advice() {
  const [advice, setAdvice] = useState(null);

  useEffect(() => {
    fetchAdvice();
  }, []);
  const fetchAdvice = () => {
    return axios
      .get("https://api.adviceslip.com/advice")
      .then((response) => setAdvice(response.data.slip.advice))
      .catch((error) => setAdvice(error.message));
  };
  return (
    <main className="main">
    <div id="advice-div">
      <p id="advice">{advice}</p>
      <br />
      <button id="advice-btn" onClick={fetchAdvice}>
        GIVE ME ADVICE
      </button>
    </div>
    </main>
  );
}

export default Advice;
