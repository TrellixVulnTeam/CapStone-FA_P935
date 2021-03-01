//using express
const express = require('express');
const app = express();
const userModel = require('../model/User');

//Get Methods

//query users
app.get('/users', async (req, res) => {
  //const users = await userModel.find({});
  //Sorting
  //use "asc", "desc", "ascending", "descending", 1, or -1
  //const users = await userModel.find({}).sort({'firstname': -1});

  //Select Specific Column
  const users = await userModel.find({})
  //.select("first_name last_name email")
  //.sort({ 'email': 'desc' });
  try {
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

//get user By Email

// app.post('/users/login', async (req, res) => {
//   const loginData = req.body
//   //const user = await userModel.find({ email: email });

//   try {
//     if (users.length != 0) {
//       res.send(user);
//     } else {
//       res.send(JSON.stringify({ status: false, message: "No data found" }))
//     }
//   } catch (err) {
//     res.status(500).send(err);
//   }
// });

app.post('/users/login', async (req, res) => {
  //const loginData = req.body
  // const email = req.body.email
  // const password=req.body.password
  const loginData = {
    email: req.body.email,
    password: req.body.password
  }
  //const user = await userModel.find({ email: email });
  try {
    // .find({})
    // .where('email').equals(email)
    //const user = userModel.find({ $and: [{ email: loginData.email }, { password: loginData.password }] })
    // const user=await userModel
    // .find({})
    // .where('email').equals(loginData.email)
    // .where('password').equals(loginData.loginData)
    // if (user.length != 0) {
    //   res.send(user)
    // }
    const user = userModel.find({})
      .where('email').equals(loginData.email)
      //.where('password').equals(loginData.password)
      .exec((err, data) => {
        if (err) {
          res.send(JSON.stringify({ status: false, message: "No data found" }));
        } else {
          res.send(data);
        }
      })
    //res.send(user)
  } catch (err) {
    res.status(500).send(err);
  }
});








//Post Methods

//register a user
app.post('/user', async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save((err) => {
      if (err) {
        //Custome error handling
        //console.log(err.errors['firstname'].message)
        /// in case of errors catch the error object 
        res.send(err)
      } else {
        res.send(user);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = app



