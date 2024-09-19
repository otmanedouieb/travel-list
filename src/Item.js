export default function Item({ item, onDeleteItem }) {
  return (
    <li>
      <input type="checkbox" />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={(e) => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
