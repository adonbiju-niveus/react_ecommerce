
import Card from "../Card/Card";
import List from "../../Data/data";
const Items = () => {
  return (
    <div className='items_section'>
      {
       List.map((item)=>(
           <Card key={item.id} item={item} />
       ) )
      }
    </div>
  )
}

export default Items;