var express = require('express');
var router = express.Router();
const mongoose = require('mongoose')
const User = require('../../../models/User');
const fs = require('fs')
const cron = require('node-cron')
const Joi = require('@hapi/joi')



const app = express()


const schema = require('../../../inputValidation/userSchema');

/* GET users listing. */
router.post('/', async (req, res) => {
  // try {
  //   const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
  // }
  // catch (err) { }
  const { name, phone, date_Of_Birth } = req.body
  
  try {
    var validateUser = await schema.validateAsync({ name, phone, date_Of_Birth });

  }
      catch (error) {
        if (!validateUser) {
          console.error(error);

          return res.status(400).json(error);

        }
     }
  
    
      
    try {
      let user = await User.findOne({ phone: req.body.phone })
      console.log(user)
      if (user) {
        return res.status(400).json({ error: [{ msg: "user already exist" }] })

      }
      user = new User({
        name,
        phone,
        date_Of_Birth
      })
      await user.save((err, doc) => {
        if (err) {
          console.log("error in saving")
        } else {
          console.log(doc);

          return res.status(200).json({
            userdetails: doc,
            msg: "you have succesfully registered"
          });
        }
      });
    } catch (error) {
      console.error(error.message)
      res.status(500).json('server error')
    }
    

  }

);

var currentdate = new Date();
var cur_month = currentdate.getMonth() + 1;
var cur_year = currentdate.getFullYear();
var cur_day = currentdate.getDate();


cron.schedule("*/5 * * * * *", async () => {
  // try {
    const user = await User.find().
    // console.log(user)
      
    //  } -1 sorts the recent post ,while 1 sorts the oldest post
    

    // res.json(posts)

    // console.log("---------------------");
    // console.log("Running Cron Job");
    // return;

  // catch (error) {
    // console.error(error.message)
    // res.status(500).json('Server Error')

  // }
    

})


module.exports = router;
