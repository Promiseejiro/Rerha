import React,{useState,useEffect} from "react"
import { Link, useNavigate } from "react-router-dom";
import axios from "axios"


//initialling 
import Avarta from "../avarta-folder/avarta.js"
import UserName from "../user-name/user-name"
import Btn from "../smallBtn/btn"
import FileInput from "../file-input/file-input.js"

//icons 
import {MdInsertPhoto} from "react-icons/md"
import {AiOutlineArrowLeft} from "react-icons/ai"
//css 
import "./file-uploads.css"
const FileUpload =()=>{
  const navigate = useNavigate();
  const [prevPosts,setPrevpost]= useState([])
  const [postInfo,setPostInfo]=useState("")
  const [file,setFile]=useState(null)
  const handlePostInfo=(e)=>{
    setPostInfo({[e.target.name]:e.target.value})
  }
  
  const handleSelectFile =(e)=>{
    setFile(e.target.files[0])
  }
  
  const  handleSubmit= async(e)=>{
  e.preventDefault()
   const formData =new FormData()
   const filename = Date.now() + file.name
   const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        }
    formData.append('file',file)
    formData.append("name",postInfo.name)
  try{
      await axios.post("http://localhost:5000/post",formData);
      navigate("/dashboard");
    }catch(error){
      alert("error occurred")
    }
  
  }
  
  const event =()=>{
    alert("event")
  }
  
  
 const getUploadeFile =async ()=>{
   try{
     const file = await axios.get("http://localhost:5000/getImage")
     setPrevpost(file.data)
    
   }catch(erro){
     console.log(erro)
   }
 }
  useEffect(()=>{
    getUploadeFile()
  },[])
 
  return (
    <React.Fragment>
   <div className="post-container">
   <div className="post-nav">
   <div className="post-nav-wrapper">
  <Link>
   <button >
   <AiOutlineArrowLeft style={{
      fontSize:"1rem"
   }}></AiOutlineArrowLeft>
   </button>
   </Link>
      <span className="nav-title">Create post</span>
<Btn event={handleSubmit}text="Post"/>
   </div>
   </div>
   <div className="post-header">
   <div> <Avarta></Avarta> </div>
   <UserName></UserName>
   </div>
   <textarea placeholder="what on your mind" className="post-textarea" type="text"name="name"onChange={handlePostInfo}>
  </textarea>
  
<FileInput event={handleSelectFile} text="Image/Video" icon={<MdInsertPhoto></MdInsertPhoto>}>
</FileInput>
<Link to="/webcam">
<FileInput text="camera" icon={<MdInsertPhoto></MdInsertPhoto>}>
</FileInput>
</Link>
<FileInput event={handleSelectFile} text="Image/Video" icon={<MdInsertPhoto></MdInsertPhoto>}>
</FileInput>
<FileInput event={handleSelectFile} text="Image/Video" icon={<MdInsertPhoto></MdInsertPhoto>}>
</FileInput>
   </div>
   </React.Fragment>
    )
}

export default FileUpload