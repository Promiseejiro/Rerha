import React from 'react'
import { Link } from 'react-router-dom';

// icon
import { BiLike } from "react-icons/bi";

const UserNavigationSideBar= ()=>{
     const menuItems = [
          {
               name:'dashboard',
               icon:<BiLike/>
          },
          {
           
               name:'post',
               icon:<BiLike/>
          },
     
          {
            
               name:'imageorvideo',
               icon:<BiLike/>
          },
          {
     
               name:'dashboard',
               icon:<BiLike/>
          },
     ]
     return(
          <ul className='nav-link'>
          {menuItems.map((menuItem)=>(
               <li>  <Link to={`${menuItem.name}`}>{menuItem.name}</Link></li>        
          ))}

     </ul>
     )
}

export default UserNavigationSideBar