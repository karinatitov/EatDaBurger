const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");


router.get("/", function(req, res) {
    console.log(res)
    burger.selectAll(function(data) {

        console.log(data);

      var hbsObject = {
        burgers: data
      };
      res.render("index", hbsObject);
    });
  });


