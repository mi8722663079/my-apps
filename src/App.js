import "./App.css";

const Person = () => {
  const sum = 4 + 44;
  return (
    <>
      <h1>the sum is</h1>
      <h1>{sum}</h1>
    </>
  );
};
const App = () => {
  const name = ["mohamed ", " ali", " yousef"];
  return (
    <div className="App">
      <h1>Hello, {name[0]}!</h1>
      <Person />
      {name[0].includes("mohamed") ? (
        <>
          <h1>there's a name</h1>
          <h2>it's called mohamed</h2>
        </>
      ) : (
        <>test</>
      )}
    </div>
  );
};

export default App;
