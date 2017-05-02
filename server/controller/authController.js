const express = require("express");
const router = express.Router();
const studentModal = require("../model/student.model.js");
const bodyParser = require('body-parser');
router.post("/", getMongoDetails);
module.exports = router;

function getMongoDetails(req, res) {
    console.log(req.body);
    // res.send(req.query.email);
    studentModal.findOne({ "email": req.body.email }, function (err, data) {
        if (err) {
            res.send(err);
        } else {
            console.log(data);
            if (data) {
                if(data.password == req.body.password) {
                    res.send("LoggedIn Successfylly");    
                }else {
                    res.send("Authentication Failed");    
                }
            } else {
                res.send("No user found with given details");
            }
        }
    });
}

// router.post("/", setMongoDetails);

// function setMongoDetails(req, res) {
//     let studentInstance = new studentModal({
//         email: "nirmal@gmail.com",
//         password: "123",
//         phone_no: "9898571971"
//     });
//     studentInstance.save(function (err, data) {
//         if (err) {
//             res.json(err).end();
//         } else {
//             res.send(data);
//         }
//     });
// }