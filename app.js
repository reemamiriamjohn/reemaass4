
const express = require('express');
const app = express();
const port = process.env.PORT || 2000;
const nav =  [
  {
    link:'/books',name:'Books'
  },
  {
    link:'/authors',name:'Authors'
  },
  {
    link:'/addbook',name:'Add Book'
  },
  {
    link:'/addauthor',name:'Add Author'
  },
  {
   link:'/login',name:'Login'
  },
  {
    link:'/sign',name:'Sign In'
   }
];

const booksRouter = require('./src/routes/bookRoutes')(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const addbookRouter =require('./src/routes/addbookRoutes')(nav)
const addauthorRouter =require('./src/routes/addauthorRoutes')(nav)
const loginRouter =require('./src/routes/loginRoutes')(nav)
const signRouter =require('./src/routes/signRoutes')(nav)
app.use(express.static('./public'));
app.set('view engine','ejs');
app.set('views','./src/views');
app.use('/books',booksRouter);
app.use('/authors',authorsRouter);
app.use('/addbook',addbookRouter);
app.use('/addauthor',addauthorRouter);
app.use('/login',loginRouter);
app.use('/sign',signRouter);
app.get('/',function(req,res){
    res.render("index",
    {
      nav,
      title:'Libarary'
    });
  });

app.listen(port,()=>{console.log("Server Ready at" + port)});