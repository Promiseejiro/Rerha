import "./btn.css"

const Btn = ({color,bgColor,text,route})=>{
  return (
    <button style={{
      backgroundColor:bgColor,
      color:color
    }}className="btn">{text}</button>
    )
}
export default Btn