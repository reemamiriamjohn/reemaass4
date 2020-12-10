const express = require('express');
const authorsRouter =express.Router();
function router(nav){
    var authors =[
        {
        
          author:'Joseph Barbera',
          
          img:"tom1.jpg"
        },
        {
          
          author:'J K Rowling',
          
          img:"harry1.jpg"
        },
        {
          
          author:'Basheer',
         
          img:"basheer1.jpg"
        },
        {
          
          author:'Paulo Coelho',
          
          img:"paulo1.jpg"
        },
        {
          
          author:'Enid Blyton',
          
          img:"famous five1.jpg"
        },
        {
          
          author:'Ruskin Bond',
          
          img:"ruskin bond1.jpg"
        }
      ]
      authorsRouter.get('/',function(req,res){
        res.render("authors",{
          nav,
          title:'Library',
          authors
        });
      });
      authorsRouter.get('/:id',function(req,res){
        const id = req.params.id
        res.render('author',{
          nav,
          title:'Library',
          author: authors[id]
        });
    });
    return authorsRouter;
}


  module.exports =  router;
