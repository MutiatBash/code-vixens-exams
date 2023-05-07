import logo from "./logo.svg";
import "./App.css";
import ItemList from "./items";
import Myprop from "./proptype";
import StatusDiv from "./styleddiv";

function App() {
  return (
    <div className="App">
      {/* <StatusDiv/> */}
      <Myprop name="Mutiat" age={22} email="mutiatbashua@gmail.com" />
    </div>
  );
}

export default App;
