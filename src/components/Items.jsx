import "./Item.css"

export function Item({ item, handleDelete, handleChecked }) {
  return (
    <li className={`itemWrapper ${item.checked ? "checked" : ""}`}>
      <div className="content">
        <p>{item.value}</p>
      </div>
      <div className="actions">
        <input type="checkbox" checked={item.checked} onChange={handleChecked} />
        <button onClick={handleDelete}>🗑</button>
      </div>
    </li>
  )
}
