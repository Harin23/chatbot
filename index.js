require('dotenv').config();
app = require('express')();

app.get('/', (req, res)=>{
    res.send("hello")
})

app.listen(process.env.PORT || 3001, (err)=>{
    if(err){
        console.log(err);
    }else{
        console.log('listening on port 3001');
    }
})