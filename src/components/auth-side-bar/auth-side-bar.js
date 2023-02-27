import React,{useState,useEffect} from 'react'
import {GiThreeFriends} from 'react-icons/gi'

import './auth-side-bar.css'
const AuthSideBar=()=>{
     const [slide,setSlide]= useState(0)

const number = [1,2,3,4,5]

useEffect(()=>{
console.log(slide)
},[slide])

     return(
<>
<div className='auth-side-bar-children'>
     <h1> Connect With</h1>
     <div className='auth-side-bar-slide-show'>
         <div>
         <h2>Friends</h2>
         <img className='auth-side-bar-slide-show-img' src={`https://www.seekpng.com/png/detail/227-2271856_uniform-clipart-happy-kid-hanging-with-friends-cartoon.png`}/>
          {/* <GiThreeFriends  className='auth-side-bar-slide-show-icon'/> */}
         </div>
     </div>
</div>
</>
     )
}

export default AuthSideBar