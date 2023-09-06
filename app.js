import express from 'express';
import ejs from 'ejs';
import bodyParser from 'body-parser';




const app= express();
// app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({extended:true}));
 const port=5000;
 


app.get("/",(req, res)=>{
        
    const options = {
        month: 'long',
        day: 'numeric',
        year: 'numeric',
        weakday:"long" 
      }; 
      
      let day= new Date().toLocaleDateString('en-US', options)
      console.log(day); 
    res.render('index', {kind:day});
}) 



app.post('/', (req, res)=>{
     console.log(req.body.newitem);  
})




app.listen(3000,()=>{
    console.log("server start");
} )