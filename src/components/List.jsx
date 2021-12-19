import { Item } from "./Items"

function List({ items, handleDeleteItem, handleChecked }) {
    return (
    <ul>
      {items.map((item, index) => (
        <Item key={index} item={item} handleDelete={() => handleDeleteItem(index)} handleChecked={() => handleChecked(index)} />
      ))}
   
    </ul>
  )
}
   // map creates an Item for every entry in the items array with two functions
export default List