const express = require('express');

const router = express.Router();


    router.get('/movies', function (req, res) {
  
    const arrMovies = ["Intersteller","Inception","Matrix","Irreversible"];
    res.send(arrMovies);
    
    });

    router.get('/movies/:index', function (req, res) {
  
        const arrMovies = ["Inception","Matrix","Irreversible","Rang De Basanti","Highway","Dosti"];
        let index = req.params.index;
       
        if(arrMovies.length>=index){
        res.send(arrMovies[index]);
      
        }
        else{res.send("No movie exists with this id")}
    
        console.log(arrMovies.length);
        });

       
       
        router.get('/films', function (req, res) {
  
            const arrMovies = 
            [ {
                id: 1,
                name: 'The Shining'
               }, 
               {
                id: 2,
                name: 'Incendies'
               },
                {
                id: 3,
                name: 'Rang de Basanti'
               }, {
                id: 4,
                name: 'Finding Nemo'
               }]
               ;
            res.send(arrMovies);
            
            });

            
        router.get('/films/:index', function (req, res) {
  
            const arrMovies = 
            [ {
                id: 1,
                name: 'The Shining'
               }, 
               {
                id: 2,
                name: 'Incendies'
               },
                {
                id: 3,
                name: 'Rang de Basanti'
               }, {
                id: 4,
                name: 'Finding Nemo'
               }];

               let id = req.params.index;
          
               for(let i=0;i<arrMovies.length;i++){
               if(arrMovies[i].id==id){
                   res.send(arrMovies[i])
                 
                     } 
                 }
               
                   res.send("Movies with such id does not exist")

            });

module.exports = router;
// adding this comment for no reason


