import { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [id, setId] = useState("");

  const fetchAdvice = async () => {
    const url = 'https://api.adviceslip.com/advice?=' + Math.random(); // Appending a random query parameter

    try {
      setLoading(true);
      console.log("Fetching Advice...")

      const data = await fetch(url);
      const advice = await data.json();

      return advice;
    } catch (err) {
      console.error(err)
      setError(err);
    } finally {
      setLoading(false);
      console.log("Finished Fetching Advice");
    }
  }

  const getAdvice = async () => {
    const advice = await fetchAdvice();

    if(advice && advice.slip) {
      setAdvice(advice.slip.advice);
      setId(advice.slip.id);
    } else {
      setError("Erorr fetching advice");
    }
  }

  useEffect(() => {
    getAdvice();
  }, [])

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-darkBlue font-manrope font-extrabold">
      <Card 
        advice={advice} 
        id={id} 
        fetchAdvice={getAdvice} 
        loading={loading}
        error={error}
      />
    </div>
  );
}

export default App;
