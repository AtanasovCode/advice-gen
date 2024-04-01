import { useState, useEffect } from "react";
import Card from "./components/Card";

const App = () => {
  const [advice, setAdvice] = useState("");
  const [id, setId] = useState("");

  const fetchAdvice = () => {
    const url = 'https://api.adviceslip.com/advice?=' + Math.random(); // Appending a random query parameter
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        console.log(data.slip);
        setAdvice(data.slip.advice);
        setId(data.slip.id);
      })
      .catch(error => {
        console.error('There was a problem fetching the advice:', error);
      });
  };


  useEffect(() => {
    fetchAdvice(); // Fetch advice on initial page load
  }, []); // Empty dependency array to ensure this effect runs only once on mount

  return (
    <div className="w-screen min-h-screen flex items-center justify-center bg-darkBlue font-manrope font-extrabold">
      <Card advice={advice} id={id} fetchAdvice={fetchAdvice} />
    </div>
  );
}

export default App;
