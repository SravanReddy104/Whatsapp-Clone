import ReactDom from "react-dom";
import "./App.css"
import Sidebar from "./Sidebar";
import Chat from "./Chat";
const App = ()=>{
       return(
         <div className="app">
            <div className="app_-body">
              <Sidebar />
              <Chat />
            </div>

         </div>
       );
}
ReactDom.render(<App />,document.getElementById("root"));