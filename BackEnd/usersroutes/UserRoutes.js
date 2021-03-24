//using express
const express = require('express');
const app = express();
const userModel = require('../model/User');
const cardModel = require('../model/UsersCards');
const userRequestModel = require('../model/UserRequest')
const balancesheetModel = require('../model/UserBalanceSheet')
const xlsx = require('xlsx')
const multer = require('multer')

var fs = require('fs');



// const tostoretemp = require('../storage')
//storage
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'usersroutes')
    // const filetouse = xlsx.readFile(file.originalname)
    // const workSheet = filetouse.Sheets['Data']
    // console.log(workSheet)
  },
  filename: function (req, file, cb) {
    // cb(null, Date.now() + '-' + file.originalname)
    cb(null, file.originalname)
  }
})
const upload = multer({ storage: storage }).single('file')


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
  const criteria = "consult"
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

//get user file upload

//file upload
app.post('/userfileupload', async (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err)
    } else if (err) {
      return res.status(500).json(err)
    }
    // console.log(req)
    const FileName = req.file.originalname
    // add file name options here !!!
    const file = xlsx.readFile(`usersroutes/${FileName}`)
    const workSheet = file.Sheets['Data']
    const data = []
    for (const [key, value] of Object.entries(workSheet)) {
      data.push(value.v);
    }
    const yearOne = {
      "indicator": data[1],
      "email": data[3],
      "year": data[5],
      "Cash": Math.round(data[11], 2),
      "Accounts_Receivable": Math.round(data[17], 2),
      "Prepaid_expenses": Math.round(data[23], 2),
      "Inventory": Math.round(data[29], 2),
      "Property_Equipment": Math.round(data[35], 2),
      "Goodwill": Math.round(data[41], 2),
      "Accounts_Payable": Math.round(data[47], 2),
      "Accrued_expenses": Math.round(data[53], 2),
      "Unearned_revenue": Math.round(data[59], 2),
      "Long_term_debt": Math.round(data[65], 2),
      "Other_long_term_liabilities": Math.round(data[71], 2),
      "Equity_Capital": Math.round(data[77], 2),
      "Retained_Earnings": Math.round(data[83], 2),
    }
    const yearTwo = {
      "indicator": data[1],
      "email": data[3],
      "year": data[6],
      "Cash": Math.round(data[12], 2),
      "Accounts_Receivable": Math.round(data[18], 2),
      "Prepaid_expenses": Math.round(data[24], 2),
      "Inventory": Math.round(data[30], 2),
      "Property_Equipment": Math.round(data[36], 2),
      "Goodwill": Math.round(data[42], 2),
      "Accounts_Payable": Math.round(data[48], 2),
      "Accrued_expenses": Math.round(data[54], 2),
      "Unearned_revenue": Math.round(data[60], 2),
      "Long_term_debt": Math.round(data[66], 2),
      "Other_long_term_liabilities": Math.round(data[72], 2),
      "Equity_Capital": Math.round(data[78], 2),
      "Retained_Earnings": Math.round(data[84], 2),
    }
    const yearThree = {
      "indicator": data[1],
      "email": data[3],
      "year": data[7],
      "Cash": Math.round(data[13], 2),
      "Accounts_Receivable": Math.round(data[19], 2),
      "Prepaid_expenses": Math.round(data[25], 2),
      "Inventory": Math.round(data[31], 2),
      "Property_Equipment": Math.round(data[37], 2),
      "Goodwill": Math.round(data[43], 2),
      "Accounts_Payable": Math.round(data[49], 2),
      "Accrued_expenses": Math.round(data[55], 2),
      "Unearned_revenue": Math.round(data[61], 2),
      "Long_term_debt": Math.round(data[67], 2),
      "Other_long_term_liabilities": Math.round(data[73], 2),
      "Equity_Capital": Math.round(data[79], 2),
      "Retained_Earnings": Math.round(data[85], 2),
    }
    const yearFour = {
      "indicator": data[1],
      "email": data[3],
      "year": data[8],
      "Cash": Math.round(data[14], 2),
      "Accounts_Receivable": Math.round(data[20], 2),
      "Prepaid_expenses": Math.round(data[26], 2),
      "Inventory": Math.round(data[32], 2),
      "Property_Equipment": Math.round(data[38], 2),
      "Goodwill": Math.round(data[44], 2),
      "Accounts_Payable": Math.round(data[50], 2),
      "Accrued_expenses": Math.round(data[56], 2),
      "Unearned_revenue": Math.round(data[62], 2),
      "Long_term_debt": Math.round(data[68], 2),
      "Other_long_term_liabilities": Math.round(data[74], 2),
      "Equity_Capital": Math.round(data[80], 2),
      "Retained_Earnings": Math.round(data[86], 2),
    }
    const yearFive = {
      "indicator": data[1],
      "email": data[3],
      "year": data[9],
      "Cash": Math.round(data[15], 2),
      "Accounts_Receivable": Math.round(data[21], 2),
      "Prepaid_expenses": Math.round(data[27], 2),
      "Inventory": Math.round(data[33], 2),
      "Property_Equipment": Math.round(data[39], 2),
      "Goodwill": Math.round(data[45], 2),
      "Accounts_Payable": Math.round(data[51], 2),
      "Accrued_expenses": Math.round(data[57], 2),
      "Unearned_revenue": Math.round(data[63], 2),
      "Long_term_debt": Math.round(data[69], 2),
      "Other_long_term_liabilities": Math.round(data[75], 2),
      "Equity_Capital": Math.round(data[81], 2),
      "Retained_Earnings": Math.round(data[87], 2),
    }
    //validate user email here
    try {
      const user = userModel.find({})
        .where('email').equals(yearOne.email)
        .exec((err, data) => {
          if (err) {
            res.send(JSON.stringify({ status: false, message: "Email Address is Incorrect" }));
          } else {
            const BSentry1 = new balancesheetModel(yearOne)
            BSentry1.save((err) => {
              if (err) {
                res.send(err)
              } else {
                const BSentry2 = new balancesheetModel(yearTwo)
                BSentry2.save((err) => {
                  if (err) {
                    res.send(err)
                  } else {
                    const BSentry3 = new balancesheetModel(yearThree)
                    BSentry3.save((err) => {
                      if (err) {
                        res.send(err)
                      } else {
                        const BSentry4 = new balancesheetModel(yearFour)
                        BSentry4.save((err) => {
                          if (err) {
                            res.send(err)
                          } else {
                            const BSentry5 = new balancesheetModel(yearFive)
                            BSentry5.save((err) => {
                              if (err) {
                                res.send(err)
                              } else {
                                // delete file uploaded file
                                fs.unlink(`usersroutes/${FileName}`, function (err) {
                                  if (err) throw err;
                                  res.send('All Entries Saved')
                                  console.log('File deleted!');
                                });
                              }
                            })
                          }
                        })
                      }
                    })
                  }
                })
                // res.send(user);
              }
            })
          }
        })
    } catch (err) {
      res.send(err);
    }
    //----------------------------
    //   console.log(yearOne)
    //   if (yearOne.email === "Year") {
    //     res.status(200).send('Invalid Email')
    //   } else {
    //     res.status(200).send('correct token')
    //   }
    // })

    //----------------------------

  })
})

//get all balance sheets
app.post('/getuserbalances', async (req, res) => {
  const emailInfo = {
    email: req.body.email,
  }
  try {
    const sheets = balancesheetModel.find({})
      .where('email').equals(emailInfo.email)
      .sort({ 'year': 'asc' })
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

})

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