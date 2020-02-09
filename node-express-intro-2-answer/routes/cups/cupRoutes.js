const express = require('express');
const router = express.Router();
const cups = require('./cupData'); 

router.route('/')
  .get((req, res, next) => {
    if (req.query && req.query.search) {
      const searchCups = cups.filter((cup) => {
        return cup.colour === req.query.search;
      });

      res.json({ data: searchCups });
      return
    }
  
    res.json({ data: cups });
  })
  .post((req, res, next) => {
    const { type, colour, size } = req.body;
    const newCup = {
      type,
      colour,
      size,
    };

    cups.push(newCup);
    res.json({ data: newCup });
  });

router.route('/:id')
  .get((req, res) => {    
    const cup = cups.find((cup) => {
      return cup.id === parseInt(req.params.id);
    });

    if (!cup) {
      res.status(404).json({ message: `cup with id ${req.params.id} doesn't exist` })
      return;
    }

    res.json({ data: cup });
  })
  .put((req, res) => {
    const { body, params } = req;
    const newCup = {
      id: parseInt(params.id),
      size: body.size,
      type: body.type,
      colour: body.colour,
    };

    const cupIndex = cups.findIndex((cup) => {
      return cup.id === parseInt(params.id);
    });
    if (cupIndex === -1) {
      res.status(404).json({ message: `cup with id ${params.id} doesn't exist` })
      return;
    }

    cups[cupIndex] = newCup;
    res.json({ data: { id: params.id }});
  });

module.exports = router;
