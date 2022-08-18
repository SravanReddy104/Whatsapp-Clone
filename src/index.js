import ReactDom from "react-dom";
import Sidebar from "./Sidebar";
import Chat from "./Chat";
import { useEffect } from "react";
import "./Chat.css";
import "./Sidebar.css";
import "./App.css";
import Pusher from "pusher-js";
import axios from "./axios";
import { useState } from "react";
import { BrowserRouter,Route,Routes,Switch} from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Hello from "./Hello";

import Routing from "./Routing";
const App = () => {
  const [messages, setmessages] = useState([]);
  useEffect(() => {
    axios.get("/messages/sync").then((response) => {
     setmessages(response.data)
      console.log(response.data)
      
    });

    console.log("hello");
  }, []);
  // useEffect(()=>{
  //   axios.get('/').then((response)=>alert(response.data),[])
  // })
  useEffect(() => {
    console.log("hello");
    var pusher = new Pusher("fa948e3715fb36711d88", {
      cluster: "ap2",
    });
   
    var channel = pusher.subscribe("messages");
    channel.bind("inserted", function (data) {
     
 
     
    });
  },[messages]);


  return (
    <div className="app">
      <div className="app__body">
      <BrowserRouter>
         <Routes>
       
                
         <Route  exact path="/home" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
   
        
      
         </Routes>
            
    </BrowserRouter>
        <Sidebar />
        <Chat messages={messages}/>
      </div>
    </div>
  );
};
ReactDom.render(<App />, document.getElementById("root"));
