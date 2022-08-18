import { Avatar, Button, IconButton } from "@material-ui/core";
import React, { useState } from "react";
import AttachmentIcon from "@material-ui/icons/Attachment";
import SearchIcon from "@material-ui/icons/Search";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import TagFacesIcon from "@material-ui/icons/TagFaces";
import MicIcon from "@material-ui/icons/Mic";
import axios from "./axios";

const Chat = ({ messages }) => {
  const [inputt,setinput] =useState("");
  const [loading,setloading] = useState(true);
  const sendmessage = async (e)=>{
    setinput("");

 
    e.preventDefault();
    await axios.post("/messages/new",{
      name:"vishnu",
      message:`${inputt}`,
      timestamp:"10:10",
      recieved:"false"
  }
    )

 
 

  
  
  }

  // setloading(false);
  return (
    <>
      <div className="chat">
        <div className="chatheader">
          <Avatar />
          <div className="chat__info">
            <h3>Sravan</h3>
            <p>Last seen...</p>
          </div>
          <div className="chat_headerright">
            <IconButton>
              <SearchIcon />
            </IconButton>
            <IconButton>
              <AttachmentIcon />
            </IconButton>
            <IconButton>
              <MoreVertIcon />
            </IconButton>
          </div>
        </div>
        
        <div className="chat__body">
        
          
          {messages.map((data)=>{

            return(
              <div className={data["recieved"]?"chatreciever":"chatmessage"}>
              <p className="chat__message">
              <span className="chat__name">{data["name"]}</span>
              {data["message"]}
              <span className="chat__timestamp">
                {data["timestamp"]}
              </span>
            </p>
            </div>
            );

          })}
          </div>
            
 
          {/* <div className="chatreciever">
            <p className="chat__message">
              <span className="chat__name">sravan</span>
              This is sravan
              <span className="chat__timestamp">
                {new Date().toLocaleString()}
              </span>
            </p>
          </div> */}
          <div className="chat__footer" style={{position:"fixed"}}>
          <span>
          <IconButton>
              <TagFacesIcon />
            </IconButton>
          </span>
            
            <form>
              <input type="text"  value = {inputt} laceholder="Enter the message"   onChange={(e)=>setinput(e.target.value)}></input>
              <Button
                stye={{cursor:"pointer" }}
                type="submit"   
               
                
                onClick={sendmessage}
                
             
               
              ></Button>
              
            </form>
            <IconButton>
              <MicIcon/>
            </IconButton>
           
           
          </div>
        </div>
      
    </>
  );
};

export default Chat;
