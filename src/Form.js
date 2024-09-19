import { useState } from "react";

export default function Form({ onAddItem }) {
  const [quantity, setQuantity] = useState(1);
  const [description, setDescription] = useState("");

  function onSubmitHandler(e) {
    e.preventDefault();

    const newItem = { id: Date.now(), description, quantity, packed: false };

    onAddItem(newItem);

    setQuantity((quantity) => (quantity = 1));
    setDescription((description) => (description = ""));
  }

  return (
    <form className="add-form" onSubmit={onSubmitHandler}>
      <h3>What you do for your trip: </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity((c) => (c = e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => (
          <option key={i + 1} value={i + 1}>
            {i + 1}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="item..."
        value={description}
        onChange={(e) =>
          setDescription((d) => setDescription((d) => (d = e.target.value)))
        }
      />
      <button>Add</button>
    </form>
  );
}
