



const Box = ({color}) => {
  return(
  <div className="Box" style={{backgroundColor:color}}>
    <p>{color ? color : "empty color"}</p>
    </div>
  )
}

export default Box