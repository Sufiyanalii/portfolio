const express = require('express');
const portfolio=require('./routes/index');
const app = express();
const path = require('path');
const PORT =3000;

/*           midleware            */
//app.use(express.static('public'));
// app.use(express.static('file'));
// app.use('/static',express.static('public'));
app.use('/static',express.static(path.join(__dirname, 'public')));

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use('/',portfolio);

// app.get('/',(req,res)=>{
//     res.render(`home`);

// })

app.get('/a',(req,res)=>{
    res.render(`index.ejs`);

})
app.get('/b',(req,res)=>{
    res.render(`index-2.ejs`);

})
app.get('/c',(req,res)=>{
    res.render(`blog-bar.ejs`);

})



app.listen(PORT,()=>{
    console.log(`Server started at http://localhost:${PORT}/`)
})