const express = require('express');
const Recipes = require('./recipe-model.js')
const router = express.Router();

router.get('/', (req, res) => {
    Recipes.find()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });

  router.get('/:id', (req, res) => {
    const { id } = req.params;
  
    Recipes.findById(id)
    .then(scheme => {
      if (scheme) {
        res.json(scheme);
      } else {
        res.status(404).json({ message: 'Could not find recipe with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get recipe' });
    });
  });


  router.get('/:id/shoppingList', (req, res) => {
    const { id } = req.params;
  
    Recipes.getShoppingList(id)
    .then(list => {
      if (list) {
        res.json(list);
      } else {
        res.status(404).json({ message: 'Could not find list with given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
  });

  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Recipes.getInstructions(id)
    .then(inst => {
      if (inst) {
        res.json(inst);
      } else {
        res.status(404).json({ message: 'Could not find instructions for given id.' })
      }
    })
    .catch(err => {
      res.status(500).json({ message: 'Failed to get instructions' });
    });
  });


  
// router.post('/', (req, res) => {
//   const carData = req.body;
//   db('cars').insert(carData)
//   .then(ids => {
//     db('cars').where({ id: ids[0] })
//     .then(newCarEntry => {
//       res.status(201).json(newCarEntry);
//     });
//   })
//   .catch (err => {
//     console.log('POST error', err);
//     res.status(500).json({ message: "Failed to store data" });
//   });
// });

// router.patch('/:id', (req, res) => {
//     const changes = req.body;
//     const {id} = req.params;
   
//     db("cars")
//      .where({id})
//      .update(changes)
//      .then(count => {
//          if(count > 0) {
//              res.status(200).json({message: `car has been updated`})
//          } else {
//            res.status(404).json({message:'no car with that ID'})
//          }
//      })
   
//    });

// router.delete('/:id', (req, res) => {
//     const {id} = req.params;
    
//         db("cars")
//         .where({id})
//         .delete()
//         .then(count => {
//             if(count > 0) {
//                 res.status(200).json({message: `car has been deleted`})
//             } else {
//               res.status(404).json({message:'no car with that ID'})
//             }
//         })
    
    
//     });

module.exports = router;