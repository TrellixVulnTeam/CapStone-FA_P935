//using express
const express = require('express');
const app = express();
const userModel = require('../model/User');
const cardModel = require('../model/UsersCards');
const userRequestModel = require('../model/UserRequest')

//user requests
//send a request
app.post('/userrequest', async (req, res) => {
  const request = {
    reporttype: req.body.reporttype,
    topic: req.body.topic,
    urgency: req.body.urgency,
    description: req.body.description,
    email: req.body.email,
    user_name: req.body.user_name
  }
  const userrequest = new userRequestModel(request)
  try {
    await userrequest.save((err) => {
      if (err) {
        res.send(err)
      } else {
        res.send(userrequest);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
//all requests
app.post('/userrequests', async (req, res) => {
  const emailInfo = {
    email: req.body.email,
  }
  try {
    const requests = userRequestModel.find({})
      .where('email').equals(emailInfo.email)
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

app.post('/managerrequests', async (req, res) => {
  try {
    const managerrequests = await userRequestModel.find({})
    res.status(200).send(managerrequests);
  } catch (err) {
    res.status(500).send(err);
  }
});




//get all users
app.get('/users', async (req, res) => {
  try {
    const users = await userModel.find({})
    res.status(200).send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

app.post('/consultants', async (req, res) => {
  const criteria="consult"
  try {
    const user = await userModel.find({})
      .where('authlevel').equals(criteria)
      .exec((err, data) => {
        if (err) {
          res.send(JSON.stringify({ status: false, message: "No data found" }));
        } else {
          res.send(data);
        }
      })
      // res.status(200).send(user);

  } catch (err) {
    res.status(500).send(err);
  }
});





//get one user
app.post('/users/getuser', async (req, res) => {
  const userInfo = {
    email: req.body.email,
  }
  try {
    const user = userModel.find({})
      .where('email').equals(userInfo.email)
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



//get cards
app.post('/cards', async (req, res) => {
  const emailInfo = {
    email: req.body.email,
  }
  try {
    const cards = cardModel.find({})
      .where('email').equals(emailInfo.email)
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

//delete card
app.post('/card/delete', async (req, res) => {
  const cardToDelete = {
    _id: req.body._id
  }
  try {
    const card = await cardModel.findOneAndDelete({ _id: cardToDelete._id })
    if (!card) {
      res.status(404).send(JSON.stringify({ status: false, message: "No Cards found" }))
    } else {
      res.status(200).send(JSON.stringify({ status: true, message: "Record Deleted Successfully" }))
    }
  } catch (err) {
    res.status(500).send(err)
  }
})
//update card status 
app.post('/card/update', async (req, res) => {
  const cardToUpdate = {
    _id: req.body._id,
    cardstatus: req.body.cardstatus,
    card_holder: req.body.card_holder,
    cardnumber: req.body.cardnumber,
    cardexpiryMonth: req.body.cardexpiryMonth,
    cardexpiryYear: req.body.cardexpiryYear,
    cardsec: req.body.cardsec,
    email: req.body.email
  }
  const others = {
    cardstatus: "InActive"
  }
  try {
    await cardModel.updateMany({}, { $set: { cardstatus: 'InActive' } });
    const card = await cardModel.findOneAndUpdate({ _id: cardToUpdate._id }, cardToUpdate, { new: true })
    res.send(card)
  } catch (err) {
    res.status(500).send(err);
  }
});



//login
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

app.post('/users/update', async (req, res) => {
  const userToUpdate = {
    first_name: req.body[0].first_name,
    last_name: req.body[0].last_name,
    phone: req.body[0].phone,
    email: req.body[0].email,
    password: req.body[0].password,
    authlevel: req.body[0].authlevel
  }
  try {
    const user = await userModel.findOneAndUpdate({ email: req.body[1] }, userToUpdate, { new: true })
    res.send(user)
  } catch (err) {
    res.status(500).send(err);
  }
});









//Post Methods

//add a user
app.post('/user', async (req, res) => {
  const user = new userModel(req.body);
  try {
    await user.save((err) => {
      if (err) {
        res.send(err)
      } else {
        res.send(user);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});
//add cards
app.post('/card', async (req, res) => {
  const request = {
    cardstatus: req.body.cardstatus,
    card_holder: req.body.card_holder,
    cardnumber: req.body.cardnumber,
    cardexpiryMonth: req.body.cardexpiryMonth,
    cardexpiryYear: req.body.cardexpiryYear,
    cardsec: req.body.cardsec,
    email: req.body.email
  }
  const card = new cardModel(request)
  try {
    await card.save((err) => {
      if (err) {
        res.send(err)
      } else {
        res.send(card);
      }
    });
  } catch (err) {
    res.status(500).send(err);
  }
});


module.exports = app



