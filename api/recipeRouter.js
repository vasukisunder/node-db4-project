const express = require("express");

const db = require('./recipe-model');
const router = express.Router();

router.get("/", (req, res) => {
    db
    .getRecipes()
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.json(err);
    })
})

router.get("/:id/steps", (req, res) => {
    db.getInstructions(req.params.id)
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.json(err);
    })
})

router.get("/:id/ingredients", (req, res) => {
    db.getShoppingList(req.params.id)
    .then(recipes => {
        res.json(recipes);
    })
    .catch(err => {
        res.json(err);
    })
})

module.exports = router;