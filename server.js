const express = require('express');
const app = express();
app.get('/',(req,res)=>{
res.send("Hello from the server side😎");
});

app.listen(process.env.PORT||3000);