import React, {useState} from "react";
import SearchColor from "./searchColor";
import Box from "./Box";





function App() {
  const [color, setColor] = useState('')


  return (
    <div className="forApp">
       <Box color={color}/>
       <SearchColor color={color} setColor={setColor}/>
    </div>
   
  )

}
export default App;
