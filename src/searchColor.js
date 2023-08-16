


const SearchColor = ({color, setColor}) => {
  
  return (
    <input 
    onChange={(e) => setColor(e.target.value)} value ={color}
    className="searchBar" placeholder="Add color name" type="text"/>
  
  )
}

export default SearchColor