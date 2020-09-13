const express=require('express')
const app=express()

app.use(express.static(__dirname+'/public'))


app.set('views','./views')
app.set('view engine', 'ejs')

app.get("/", async (req,res)=>{
    res.render('index')
})
app.get("/home", async (req,res)=>{
    res.render('index')
})
app.get("/about", async (req,res)=>{
    res.render('about')
})
app.get("/contact", async (req,res)=>{
    res.render('contact')
})
app.get("/gallery", async (req,res)=>{
    res.render('gallery')
})

const port=process.env.PORT||4000
app.listen(port, error=>{
    if(error){
        throw(error)
    }
    else{
        console.log('listening to port 4000')
    }
});


