import { useEffect, useState } from "react";
import "./App.css";
const Button = ({ counter, onClick }) => {
  return <button onClick={onClick}>my count is{counter}</button>;
};
const App = () => {
  const [counter, setCounter] = useState(0);
  const handleClicks = () => {
    setCounter(counter + 1);
  };
  useEffect(() => {
    setCounter(100);
  }, []);
  return (
    <div className="App">
      <Button counter={counter} onClick={handleClicks} />
      <Button counter={counter} onClick={handleClicks} />
    </div>
  );
};

export default App;
