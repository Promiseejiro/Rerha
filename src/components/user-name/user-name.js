
//css 
import "./user-name.css"

const UserName =({fontsize,text})=>{
  return (
    <div>
      <h3 className="user-name"style={{fontSize:fontsize}}>{text}</h3>
    </div>
    )
}

export default UserName