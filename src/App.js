import CompUseFetch from "./Components/CompUseFetch";
import CompUseTimeout from "./Components/CompUseTimeout";

function App() {
  return (
    <div className="App">
      <h1>useFetch Hook</h1>
      <CompUseFetch />
      <br />
      <br />
      <h1>UseTimeout Hook</h1>
      <CompUseTimeout />
    </div>
  );
}

export default App;
