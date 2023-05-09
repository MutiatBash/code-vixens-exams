import logo from "./logo.svg";
import "./App.css";
import ItemList from "./items";
import Myprop from "./proptype";
import StatusDiv from "./styleddiv";

function App() {
  return (
    <div className="App">
      <Myprop name="Mutiat" age={22} email="mutiatbashua@gmail.com" />
      <StatusDiv status="success" />
      <StatusDiv />
      <StatusDiv status="warning" />
      <StatusDiv status="error" />
    </div>
  );
}

export default App;
