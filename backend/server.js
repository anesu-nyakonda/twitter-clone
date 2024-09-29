const express = require("express")
const app = express()

console.log(process.env.MONGO_URL)


app.listen(3000, ()=>{
    console.log("listening on port 3000")
})