import { useState } from "react";

const items = [
  { id: 1, name: "Book" },
  { id: 2, name: "Plate" },
  { id: 3, name: "Cup" },
  { id: 4, name: "Apple" },
  { id: 5, name: "Mango" },
];

function ItemList({ items }) {
  const [selectedItems, setSelectedItems] = useState([]);

  function handleCheckboxClick(item) {
    setSelectedItems((prevSelectedItems) => {
      if (prevSelectedItems.includes(item.id)) {
        return prevSelectedItems.filter((id) => id !== item.id);
      } else {
        return [...prevSelectedItems, item.id];
      }
    });
  }

  function handleButtonClick() {
    alert(`Selected item IDs: ${selectedItems.join(", ")}`);
  }

  if (items.length === 0) {
    return <p>No items to display</p>;
  }

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Selected</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <input
                  type="checkbox"
                  checked={selectedItems.includes(item.id)}
                  onChange={() => handleCheckboxClick(item)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleButtonClick}>Show selected items</button>
    </div>
  );
}
  