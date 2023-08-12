import mongoose from "mongoose";


export const connectDB =()=>{
  mongoose
.connect("mongodb://127.0.0.1:27017", {
  dbName: "userdata",
})
.then(() => {
  console.log("database connectd successfully");
})
.catch(() => {
  console.log("ERROR: Couldn't connect");
});
}