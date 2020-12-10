const express = require('express');
const booksRouter =express.Router();
function router(nav){
    var books =[
        {
          title:'Tom and Jerry',
          author:'Joseph Barbera',
          genre:'Cartoon',
          img:"tom.jpg"
        },
        {
          title:'Harry Potter',
          author:'J K Rowling',
          genre:'Fantasy',
          img:"harry.jpg"
        },
        {
          title:'Paathumayude Aadu',
          author:'Basheer',
          genre:'Drama',
          img:"basheer.jpg"
        },
        {
          title:'Alchemist',
          author:'Paulo Coelho',
          genre:'Drama',
          img:"paulo.jpg"
        },
        {
          title:'Famous Five',
          author:'Enid Blyton',
          genre:'Novel',
          img:"famous five.jpg"
        },
        {
          title:'Cherry Tree',
          author:'Ruskin Bond',
          genre:'Mystery',
          img:"secret seven.jpg"
        }
      ]
      booksRouter.get('/',function(req,res){
        res.render("books",{
          nav,
          title:'Library',
          books
        });
      });
      booksRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('book',{
          nav,
          title:'Library',
          book: books[id]
        });
    });
    return booksRouter;
}


  module.exports =  router;
