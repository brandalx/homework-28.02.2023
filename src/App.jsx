import "./App.css";

import Task1App from "./components/task1/task1App";
import Task2App from "./components/task2/task2App";
import Task3App from "./components/task3/task3App";
function App() {
  return (
    <div className="App">
      <h1 className="py-5">This is homework from 28.02.2023</h1>
      <Task1App />
      <hr className="mx-auto w-75" />
      <Task2App />
      <hr className="mx-auto w-75" />
      <Task3App />
      <hr className="mx-auto w-75" />
    </div>
  );
}

export default App;
