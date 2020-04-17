const express = require('express');
const Recipes = require('./recipe-model.js')
const router = express.Router();

router.get('/', (req, res) => {
  Recipes.findIngredients()
  .then(recipes => {
    res.json(recipes);
  })
  .catch(err => {
    res.status(500).json({ message: 'Failed to get recipes' });
  });
});




router.get('/:id/recipes', (req, res) => {
    const { id } = req.params;
    Recipes.getIngredientUse(id)
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

  module.exports = router;