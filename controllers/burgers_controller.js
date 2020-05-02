const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
  });
  
  router.post("/api/burgers", function(req, res) {
    burger.createOne([
      "burger_name", "devoured"
    ], [
      req.body.burger_name, req.body.devoured
    ], function(result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
  });
  
  router.put("/api/burgers/:id", function(req, res) {
    req.body.burger_name, req.body.devoured

    var id = parseInt(req.params.id);
    var devour = parseInt(req.body.devoured);
    (devour ===0) ? devour = 1 : devour = 0;
    burger.updateOne({
        devoured: devour
    }, 
    {
        id: id
    },function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
  });


