console.log ("hello world");
const express= require('express');
const app= express();
const port=3000;
/*app.use ((req, res,next)=>{
    console.log("Middleware connencted");
    next();
});*/
app.get('/', (req,res)=>{
    res.send ("hello nandita");
});
app.get('/users/:id',(req,res)=>{
    const userId =req.params.id;
    res.send(`User with Id ${userId}`);

});


app.listen(3000, ()=>{
    console.log (`Server started at port $(port)`);
});