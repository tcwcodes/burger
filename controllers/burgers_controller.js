var express = require("express");

var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
        var hbsObject = {
            burgers: data
        };
        res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.insertOne([req.body.name], function(result) {
        console.log(result);
        res.json({ id: result.id });
    });
});

// router.put("/api/burgers", function(req, res) {
//     burger.updateOne(function(result) {
//         res.json({id: result.id})
//     });
// });

router.get("/api/burgers", function(req, res) {
    burger.selectAll(function(data) {
        res.json(data);
    });
});

module.exports = router;