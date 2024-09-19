export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        Start Adding some items to your packing list
      </footer>
    );

  const numItems = items.length;

  const packedItems = items.filter((item) => item.packed === true).length;

  const packedPercentage = Math.round((packedItems / numItems) * 100);

  return (
    <footer className="stats">
      <em>
        {packedPercentage === 100
          ? "You have everything! Ready to go 🛫"
          : `You have ${numItems} items on your list, and you already packed 
        ${packedItems} (${packedPercentage}%)`}
      </em>
    </footer>
  );
}
