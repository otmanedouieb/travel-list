import { useState } from "react";

import Logo from "./Logo";
import Form from "./Form";
import PackingList from "./PackingList";
import Stats from "./Stats";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Back", quantity: 1, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);

  function addItemHandler(item) {
    setItems((items) => [...items, item]);
  }

  function deleteItemHandler(id) {
    setItems((previousItems) => previousItems.filter((item) => item.id !== id));
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={addItemHandler} />
      <PackingList items={items} onDeleteItem={deleteItemHandler} />
      <Stats />
    </div>
  );
}
