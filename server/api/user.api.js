var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
// var jwt = require('jsonwebtoken');
var httpStatus = require('http-status-codes')
const user = require('../model/user.model');


router.route('/').get((req,res) => {

    user.find({}).then(docs => {
        res.send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.route('/:id').get((req,res) => {
    let id = req.params.id;
    user.findById(id).then(docs => {
        res.status(httpStatus.OK).send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});
router.route("/search/:name").get((req, res) => {
    var name = req.params.name;
    console.log("name");
    var query = {$or : [{name:{$regex :name , $options: "i"}}, {contact:{$regex : name}}] };
    if(name=="***") {
        query = null;
    }
    user.find(query).then(docs=>{
      res.send(docs);
    }).catch(err => {
      res.status(500).send(err);
    });
  });


router.route('/').post((req,res) => {
    const obj = req.body;
    user.create(obj).then(doc => {
        console.log("success")
        res.status(httpStatus.OK).send(doc);
    }).catch(err => {        
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.route('/:id').delete((req,res) => {
    let id = req.params.id;
    user.findByIdAndDelete(id).then(docs => {
        res.status(httpStatus.OK).send(docs);
    }).catch(err => {
        res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
    });
});

router.route('/:id').put((req,res) => {
    let id = req.params.id;
    const obj = req.body;
    user.findByIdAndUpdate(id,{name: obj.name, contact: obj.contact, address: obj.address, country: obj.country, imagePath: obj.imagePath},
        (err, doc) => {
            if(err){
                res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err);
            }
            else{
                res.status(httpStatus.OK).send(doc);
            }
        });
});

module.exports = router; 