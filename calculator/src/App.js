import logo from "./logo.svg";
import "./App.css";
import ItemList from "./items";

function App() {
  const items = [
    { id: 1, name: "Book" },
    { id: 2, name: "Plate" },
    { id: 3, name: "Cup" },
    { id: 4, name: "Apple" },
    { id: 5, name: "Mango" },
  ];
  return (
    <div className="App">
      <h2>List items</h2>
      <ItemList items={items} />
    </div>
  );
}

export default App;
