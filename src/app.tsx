import "./app.css";
import { add } from "@kinbalam/numbers";

const App = () => {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>{add(1 + 2)}</p>
    </div>
  );
};

export default App;
