import express from "express";
import Messages from "./dbMessages.js";
import mongoose from "mongoose";
import Pusher from "pusher";
const app = express();
import cors from "cors";

const port = process.env.PORT || 9000;
app.use(express.json());

const url =
  "mongodb+srv://Sravan10:aSMOoPpCQwXcag46@cluster0.hldwt.mongodb.net/sravan?retryWrites=true&w=majority";

// db.once("open",()=>{
//     console.log("connected");
// })

mongoose.connect(url);
const db = mongoose.connection;
db.once("open", () => {
  console.log("connected");
  const msgCollection = db.collection("messagecontents");
  const changeStream = msgCollection.watch();
  changeStream.on("change", (change) => {
    if(change.operationType === "insert"){
        const messageDetails = change.fullDocument;
        pusher.trigger("messages","inserted",{
            name:messageDetails.name,
            message:messageDetails.message,
            timestamp:messageDetails.timestamp,
            recieved:messageDetails.recieved
        });
    }
    else{
        console.log("error ocuured at trigger");
    }
   
    console.log("Cchange occured",change);
  });
});
const pusher = new Pusher({
  appId: "1423417",
  key: "fa948e3715fb36711d88",
  secret: "2061cf2cd72c540d3bfc",
  cluster: "ap2",
  useTLS: true,
});
app.use(cors());

// app.use((req,res,next) =>{
//     res.setHeader("Access-Control-Allow-Origin","*");
//     res.setHeader("Access-Control-Allow-Headers", "*")
//     next();
// }) 
app.get("/", (req, res) => res.status(200).send("Hello World"));

app.get("/messages/sync", (req, res) => {
  Messages.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(data);
    }
  });
});
app.post("/messages/new", (req, res) => {
  const dbMessage = req.body;
  console.log(dbMessage);
  Messages.create(dbMessage, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});
app.listen(port, () => console.log(`Listening at ${port}`));
