var express = require("express");
const path = require("path");

var app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");
app.use(cors());

const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/mybea", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connect successfull..."))
  .catch((err) => console.log(err));

app.get("/", function (req, res) {
  res.send("MyBea Backend");
});

app.get("/registration", function (req, res) {
  var name = req.query.name;
  var email = req.query.email;
  var password = req.query.password;
  console.log(name);

  console.log(email);
  console.log(password);

  

  const setData = async () => {
    const User = require("./models/user");

    const obj = new User({
      name: name,
      email: email,
      password: password,
      active: true,
    });
    obj.save().then(() => {
      console.log("add user successfully");
      const obj = { sratus: true, data: "add user", status_code: "200" };
      const myJSON = JSON.stringify(obj);
      res.send(myJSON);
    });
  };
  setData();
});

app.get("/OTP", function (req, res) {
  var email = req.query.email;
  console.log(email);
  var nodemailer = require('nodemailer');
    otp = Math.floor(Math.random() * (999999 - 100000) ) + 100000
    var transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'vineetkrishnagupta@gmail.com',
        pass: 'absyxcpcvwizjmlk'
      }
    });

    var mailOptions = {
      from: 'MyBea Email Verification',
      to: email,
      subject: 'Email Verification',
    //   text: `your otp is ${otp} \n thank you\n my bea team`,
      html:`<h1>Verify Your Email Address</h1>
      <img src="https://img.freepik.com/free-vector/enter-otp-concept-illustration_114360-7897.jpg?w=2000" alt="">
      <h3>Please enter the below mentloned OTP for logging into MyBea</h3>
      <button><h1>OTP : ${otp}</h1></button>
      <h6>If this email is not intended to you please ignore it.</h6>
      <h6>Thank You</h6>
      <h6>Team MyBea</h6>
      `
    };

    transporter.sendMail(mailOptions, function(error, info){
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
         
        const obj = { sratus: true, data: otp, status_code: "200" };
  const myJSON = JSON.stringify(obj);
  res.send(myJSON);
      }
    });

  
});

app.get("/flight/myticket", function (req, res) {
  var email = req.query.email;
  const getData = async () => {
    const Ticket = require("./models/fbook");
    const count = await Ticket.find({ user_email: email }).count();
    console.log(count);
    if (count > 0) {
      const data = await Ticket.find({ user_email: email });
      console.log(data);
      res.send(data);
    } else {
      //   res.render('login',{unauthorized_user:true})
      res.send();
    }
  };

  getData();
});

app.get("/train/myticket", function (req, res) {
  var email = req.query.email;
  console.log(email);
  const getData = async () => {
    const Ticket = require("./models/tbook");
    const count = await Ticket.find({ user_email: email }).count();
    console.log(count);
    if (count > 0) {
      const data = await Ticket.find({ user_email: email });
      console.log(data);
      res.send(data);
    } else {
      //   res.render('login',{unauthorized_user:true})
      res.send();
    }
  };

  getData();
});
app.get("/bus/myticket", function (req, res) {
  var email = req.query.email;
  console.log(email);
  const getData = async () => {
    const Ticket = require("./models/bbook");
    const count = await Ticket.find({ user_email: email }).count();
    console.log(count);
    if (count > 0) {
      const data = await Ticket.find({ user_email: email });
      console.log(data);
      res.send(data);
    } else {
      //   res.render('login',{unauthorized_user:true})
      res.send();
    }
  };

  getData();
});
app.get("/login", function (req, res) {
  var email = req.query.email;
  var password = req.query.password;
  console.log(email, password);
  //res.send("lign")
  const getData = async () => {
    const User = require("./models/user");
    const count = await User.find({ email: email, password: password }).count();
    console.log(count);
    if (count > 0) {
      const data = await User.find({ email: email, password: password });
      console.log(data);
      res.send(data);
    } else {
      //   res.render('login',{unauthorized_user:true})
      res.send();
    }
  };

  getData();
});

app.get("/flight/payment", function (req, res) {
  console.log("flight payment");

  var cardNumber = req.query.cardNumber;
  var exDate = req.query.exDate;
  var cvv = req.query.cvv;
  var cardHolder = req.query.cardHolder;

  var user_id = req.query.user_id;
  var user_email = req.query.user_email;

  var flight_number = req.query.flight_number;
  var airline = req.query.airline;
  var departure_at = req.query.departure_at;

  var duration = req.query.duration;
  var price = req.query.price;

  var from = req.query.from;
  var to = req.query.to;
  var gdate = req.query.gdate;
  var rdate = req.query.rdate;

  console.log(cardNumber);
  console.log(exDate);
  console.log(cvv);
  console.log(cardHolder);

  console.log(flight_number);
  console.log(airline);
  console.log(duration);
  console.log(price);
  console.log(user_id);
  console.log(user_email);

  var setData = async () => {
    const Book = require("./models/fbook");
    var obj = new Book({
      flight_ariline: airline,
      flight_number: flight_number,
      from_airport: from,
      to_airport: to,
      gdate: gdate,
      rdate: rdate,
      price: price,
      departure: departure_at,
      duration: duration,
      user_id: user_id,
      user_email: user_email,
    });
    obj.save().then(() => {
      console.log("booking2 successfully");
      var payment = async () => {
        const pay = require("./models/payment");
        var obj = new pay({
          card_numder: cardNumber,
          expiration_date: exDate,
          cvv: cvv,
          card_holder_name: cardHolder,
          payment: price,
          user_id: user_id,
          user_email: user_email,
          for: "flight",
        });
        obj.save().then(() => {
          console.log("--- Payment Data Save ---");
          const obj = { sratus: true, data: "success", status_code: "200" };
          const myJSON = JSON.stringify(obj);
          res.send(myJSON);
        });
      };
      payment();
    });
  };
  setData();
});

app.get("/train/payment", function (req, res) {
  console.log("train payment");
  var cardNumber = req.query.cardNumber;
  var exDate = req.query.exDate;
  var cvv = req.query.cvv;
  var cardHolder = req.query.cardHolder;

  var train_number = req.query.train_number;
  var train_name = req.query.train_name;
  var from_std = req.query.from_std;

  var duration = req.query.duration;
  var price = req.query.price;

  var from = req.query.from;
  var to = req.query.to;
  var gdate = req.query.gdate;
  var rdate = req.query.rdate;

  var user_id = req.query.user_id;
  var user_email = req.query.user_email;

  console.log(cardNumber);
  console.log(exDate);
  console.log(cvv);
  console.log(cardHolder);
  var setData = async () => {
    const Book = require("./models/tbook");

    var obj = new Book({
      train_name: train_name,
      train_number: train_number,
      from_city: from,
      to_city: to,
      gdate: gdate,
      rdate: rdate,
      price: price,
      depart_time: from_std,
      distance: duration,

      user_id: user_id,
      user_email: user_email,
    });
    obj.save().then(() => {
      console.log("--- Save Train Data ---");

      var payment = async () => {
        const pay = require("./models/payment");
        var obj = new pay({
          card_numder: cardNumber,
          expiration_date: exDate,
          cvv: cvv,
          card_holder_name: cardHolder,
          payment: price,
          user_id: user_id,
          user_email: user_email,
          for: "train",
        });
        obj.save().then(() => {
          console.log("--- Payment Data Save ---");
          const obj = { sratus: true, data: "success", status_code: "200" };
          const myJSON = JSON.stringify(obj);
          res.send(myJSON);
        });
      };
      payment();
    });
  };
  setData();
});

app.get("/bus/payment", function (req, res) {
  console.log("bus payment");
  var cardNumber = req.query.cardNumber;
  var exDate = req.query.exDate;
  var cvv = req.query.cvv;
  var cardHolder = req.query.cardHolder;

  var bus_number = req.query.bus_number;
  var company_name = req.query.company_name;
  var departure_address = req.query.departure_address;
  var departure_time = req.query.departure_time;

  var duration = req.query.duration;
  var price = req.query.price;

  var user_id = req.query.user_id;
  var user_email = req.query.user_email;

  var from = req.query.from;
  var to = req.query.to;
  var gdate = req.query.gdate;
  var rdate = req.query.rdate;
  console.log(cardNumber);
  console.log(exDate);
  console.log(cvv);
  console.log(cardHolder);
  console.log(company_name);
  console.log(bus_number);

  console.log(departure_address);
  console.log(departure_time);
  console.log(duration);
  console.log(price);
  console.log(user_id);
  console.log(user_email);

  var setData = async () => {
    const Book = require("./models/bbook");

    var obj = new Book({
      company_name: company_name,
      bus_number: bus_number,
      from_city: from,
      to_city: to,
      gdate: gdate,
      rdate: rdate,
      price: price,
      departure_address: departure_address,
      departure_time: departure_time,

      duration: duration,
      user_id: user_id,
      user_email: user_email,
    });
    obj.save().then(() => {
      console.log("booking2 successfully");

      var payment = async () => {
        const pay = require("./models/payment");
        var obj = new pay({
          card_numder: cardNumber,
          expiration_date: exDate,
          cvv: cvv,
          card_holder_name: cardHolder,
          payment: price,
          user_id: user_id,
          user_email: user_email,
          for: "bus",
        });
        obj.save().then(() => {
          console.log("--- Payment Data Save ---");
          const obj = { sratus: true, data: "success", status_code: "200" };
          const myJSON = JSON.stringify(obj);
          res.send(myJSON);
        });
      };
      payment();
    });
  };
  setData();
});

app.get("/available/bus", function (req, res) {
  var from = req.query.from;
  var to = req.query.to;
  console.log(from, to);

  //res.send("data")

  const axios = require("axios");
  const options = {
    method: "GET",
    url: `https://unnourishing-schedu.000webhostapp.com/bon-voyage/API/?from=${from}%20&to=${to}`,
  };
  axios
    .request(options)
    .then(function (response) {
      var data = response.data.data;
      //console.log(data)

      res.send(data);
    })
    .catch(function (error) {
      console.error(error);
    });
});
app.get("/available/train", function (req, res) {
  var from = req.query.from;
  var to = req.query.to;
  console.log(from, to);
  var data = {
    "status": true,
    "message": "Success",
    "timestamp": 1680379328922,
    "data": [
      {
        "train_number": "22221",
        "train_name": "MUMBAI CSMT - HAZRAT NIZAMUDDIN Rajdhani Express",
        "run_days": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        "train_src": "CSMT",
        "train_dstn": "NZM",
        "from_std": "16:00",
        "from_sta": "16:00",
        "local_train_from_sta": 960,
        "to_sta": "09:55",
        "to_std": "09:55",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "CSMT",
        "to": "NZM",
        "from_station_name": "MUMBAI CSMT",
        "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
        "duration": "17:55",
        "special_train": false,
        "train_type": "RAJ",
        "train_date": "26-05-2023",
        "class_type": [
          "3A",
          "2A",
          "1A"
        ]
      },
      {
        "train_number": "12951",
        "train_name": "MUMBAI CENTRAL - NEW DELHI Rajdhani Express",
        "run_days": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        "train_src": "MMCT",
        "train_dstn": "NDLS",
        "from_std": "17:24",
        "from_sta": "17:22",
        "local_train_from_sta": 1042,
        "to_sta": "08:32",
        "to_std": "08:32",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "BVI",
        "to": "NDLS",
        "from_station_name": "BORIVALI",
        "to_station_name": "NEW DELHI",
        "duration": "15:8",
        "special_train": false,
        "train_type": "RAJ",
        "train_date": "26-05-2023",
        "class_type": [
          "3A",
          "2A",
          "1A"
        ]
      },
      {
        "train_number": "12953",
        "train_name": "MUMBAI CENTRAL - HAZRAT NIZAMUDDIN August Kranti Rajdhani Exp",
        "run_days": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        "train_src": "MMCT",
        "train_dstn": "NZM",
        "from_std": "17:35",
        "from_sta": "17:33",
        "local_train_from_sta": 1053,
        "to_sta": "09:43",
        "to_std": "09:43",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "BVI",
        "to": "NZM",
        "from_station_name": "BORIVALI",
        "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
        "duration": "16:8",
        "special_train": false,
        "train_type": "RAJ",
        "train_date": "26-05-2023",
        "class_type": [
          "3A",
          "2A",
          "1A"
        ]
      },
      {
        "train_number": "12925",
        "train_name": "MUMBAI BANDRA T - AMRITSAR Paschim SF Express",
        "run_days": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        "train_src": "MMCT",
        "train_dstn": "ASR",
        "from_std": "11:58",
        "from_sta": "11:55",
        "local_train_from_sta": 715,
        "to_sta": "10:40",
        "to_std": "11:05",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "BVI",
        "to": "NDLS",
        "from_station_name": "BORIVALI",
        "to_station_name": "NEW DELHI",
        "duration": "22:42",
        "special_train": false,
        "train_type": "SUF",
        "train_date": "26-05-2023",
        "class_type": [
          "SL",
          "3A",
          "2A",
          "1A"
        ]
      },
      {
        "train_number": "12903",
        "train_name": "MUMBAI CENTRAL - AMRITSAR Golden Temple SF Mail",
        "run_days": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        "train_src": "MMCT",
        "train_dstn": "ASR",
        "from_std": "19:18",
        "from_sta": "19:15",
        "local_train_from_sta": 1155,
        "to_sta": "13:50",
        "to_std": "14:05",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "BVI",
        "to": "NZM",
        "from_station_name": "BORIVALI",
        "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
        "duration": "18:32",
        "special_train": false,
        "train_type": "SUF",
        "train_date": "26-05-2023",
        "class_type": [
          "SL",
          "3A",
          "2A",
          "1A"
        ]
      },
      {
        "train_number": "12137",
        "train_name": "MUMBAI CSMT - FIROZPUR CANTT SF Punjab Mail",
        "run_days": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        "train_src": "CSMT",
        "train_dstn": "FZR",
        "from_std": "19:50",
        "from_sta": "19:47",
        "local_train_from_sta": 1187,
        "to_sta": "21:25",
        "to_std": "21:40",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "DR",
        "to": "NDLS",
        "from_station_name": "MUMBAI DADAR CENTRAL",
        "to_station_name": "NEW DELHI",
        "duration": "25:35",
        "special_train": false,
        "train_type": "SUF",
        "train_date": "26-05-2023",
        "class_type": [
          "SL",
          "3A",
          "2A",
          "1A"
        ]
      },
      {
        "train_number": "22209",
        "train_name": "MUMBAI CENTRAL - NEW DELHI AC Duronto Exp",
        "run_days": [
          "Mon",
          "Fri"
        ],
        "train_src": "MMCT",
        "train_dstn": "NDLS",
        "from_std": "23:00",
        "from_sta": "23:00",
        "local_train_from_sta": 1380,
        "to_sta": "15:55",
        "to_std": "15:55",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "MMCT",
        "to": "NDLS",
        "from_station_name": "MUMBAI CENTRAL",
        "to_station_name": "NEW DELHI",
        "duration": "16:55",
        "special_train": false,
        "train_type": "DRNT",
        "train_date": "26-05-2023",
        "class_type": [
          "3A",
          "2A",
          "1A"
        ]
      },
      {
        "train_number": "12471",
        "train_name": "MUMBAI BANDRA T - SMVD KATRA Swaraj SF Express",
        "run_days": [
          "Sun",
          "Mon",
          "Thu",
          "Fri"
        ],
        "train_src": "BDTS",
        "train_dstn": "SVDK",
        "from_std": "11:26",
        "from_sta": "11:23",
        "local_train_from_sta": 683,
        "to_sta": "05:25",
        "to_std": "05:40",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "BVI",
        "to": "NDLS",
        "from_station_name": "BORIVALI",
        "to_station_name": "NEW DELHI",
        "duration": "17:59",
        "special_train": false,
        "train_type": "SUF",
        "train_date": "26-05-2023",
        "class_type": [
          "SL",
          "3A",
          "2A",
          "1A"
        ]
      },
      {
        "train_number": "12247",
        "train_name": "MUMBAI BANDRA T - HAZRAT NIZAMUDDIN Yuva Exp",
        "run_days": [
          "Fri"
        ],
        "train_src": "BDTS",
        "train_dstn": "NZM",
        "from_std": "17:30",
        "from_sta": "17:30",
        "local_train_from_sta": 1050,
        "to_sta": "10:15",
        "to_std": "10:15",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "BDTS",
        "to": "NZM",
        "from_station_name": "MUMBAI BANDRA TERMINUS",
        "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
        "duration": "16:45",
        "special_train": false,
        "train_type": "SUF",
        "train_date": "26-05-2023",
        "class_type": [
          "CC",
          "3A"
        ]
      },
      {
        "train_number": "19019",
        "train_name": "MUMBAI BANDRA T - HARIDWAR Express",
        "run_days": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        "train_src": "BDTS",
        "train_dstn": "HW",
        "from_std": "00:35",
        "from_sta": "00:30",
        "local_train_from_sta": 30,
        "to_sta": "02:30",
        "to_std": "02:45",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "BVI",
        "to": "NZM",
        "from_station_name": "BORIVALI",
        "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
        "duration": "25:55",
        "special_train": false,
        "train_type": "MEX",
        "train_date": "26-05-2023",
        "class_type": [
          "SL",
          "3A",
          "2A",
          "1A"
        ]
      },
      {
        "train_number": "11057",
        "train_name": "MUMBAI CSMT - AMRITSAR Express",
        "run_days": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        "train_src": "CSMT",
        "train_dstn": "ASR",
        "from_std": "00:05",
        "from_sta": "00:02",
        "local_train_from_sta": 1442,
        "to_sta": "03:40",
        "to_std": "03:55",
        "from_day": 1,
        "to_day": 2,
        "d_day": 1,
        "from": "TNA",
        "to": "NDLS",
        "from_station_name": "THANE",
        "to_station_name": "NEW DELHI",
        "duration": "27:35",
        "special_train": false,
        "train_type": "MEX",
        "train_date": "26-05-2023",
        "class_type": [
          "SL",
          "3A",
          "2A"
        ]
      },
      {
        "train_number": "12216",
        "train_name": "MUMBAI BANDRA T - DELHI SARAI ROHILLA Garib Rath Exp",
        "run_days": [
          "Tue",
          "Wed",
          "Fri",
          "Sun"
        ],
        "train_src": "BDTS",
        "train_dstn": "DEE",
        "from_std": "12:24",
        "from_sta": "12:21",
        "local_train_from_sta": 741,
        "to_sta": "11:00",
        "to_std": "11:00",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "BVI",
        "to": "DEE",
        "from_station_name": "BORIVALI",
        "to_station_name": "DELHI SARAI ROHILLA",
        "duration": "22:36",
        "special_train": false,
        "train_type": "GBR",
        "train_date": "26-05-2023",
        "class_type": [
          "3A"
        ]
      },
      {
        "train_number": "12617",
        "train_name": "ERNAKULAM - HAZRAT NIZAMUDDIN Mangala Lakshadweep SF Exp",
        "run_days": [
          "Mon",
          "Tue",
          "Wed",
          "Thu",
          "Fri",
          "Sat",
          "Sun"
        ],
        "train_src": "ERS",
        "train_dstn": "NZM",
        "from_std": "13:30",
        "from_sta": "13:27",
        "local_train_from_sta": 2247,
        "to_sta": "13:20",
        "to_std": "13:20",
        "from_day": 1,
        "to_day": 2,
        "d_day": 1,
        "from": "KYN",
        "to": "NZM",
        "from_station_name": "KALYAN JN",
        "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
        "duration": "23:50",
        "special_train": false,
        "train_type": "SUF",
        "train_date": "26-05-2023",
        "class_type": [
          "SL",
          "3A",
          "2A"
        ]
      },
      {
        "train_number": "12263",
        "train_name": "PUNE - HAZRAT NIZAMUDDIN AC Duronto Express",
        "run_days": [
          "Tue",
          "Fri"
        ],
        "train_src": "PUNE",
        "train_dstn": "NZM",
        "from_std": "14:25",
        "from_sta": "14:20",
        "local_train_from_sta": 860,
        "to_sta": "06:45",
        "to_std": "06:45",
        "from_day": 0,
        "to_day": 1,
        "d_day": 0,
        "from": "BSR",
        "to": "NZM",
        "from_station_name": "VASAI ROAD",
        "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
        "duration": "16:20",
        "special_train": false,
        "train_type": "DRNT",
        "train_date": "26-05-2023",
        "class_type": [
          "3A",
          "2A",
          "1A"
        ]
      },
      {
        "train_number": "12431",
        "train_name": "TRIVANDRUM CENTRAL - HAZRAT NIZAMUDDIN Rajdhani Exp",
        "run_days": [
          "Wed",
          "Fri",
          "Sat"
        ],
        "train_src": "TVC",
        "train_dstn": "NZM",
        "from_std": "18:05",
        "from_sta": "18:00",
        "local_train_from_sta": 2520,
        "to_sta": "12:30",
        "to_std": "12:30",
        "from_day": 1,
        "to_day": 2,
        "d_day": 1,
        "from": "PNVL",
        "to": "NZM",
        "from_station_name": "PANVEL",
        "to_station_name": "DELHI HAZRAT NIZAMUDDIN",
        "duration": "18:25",
        "special_train": false,
        "train_type": "RAJ",
        "train_date": "26-05-2023",
        "class_type": [
          "3A",
          "2A",
          "1A"
        ]
      }
    ]
  }
      

    
  const myJSON = JSON.stringify(data.data);
  res.send(myJSON);
});

app.get("/available/flight", function (req, res) {
  var from = req.query.from;
  var to = req.query.to;
  console.log(from, to);
  const axios = require("axios");
  const options = {
    method: "GET",
    url: `https://api.travelpayouts.com/aviasales/v3/prices_for_dates?origin=${from}&destination=${to}&unique=false&sorting=price&direct=false&currency=inr&limit=30&page=1&one_way=true&token=8bea42dc8dc3c30a4a68849450e17096`,
  };
  try{
    axios
    .request(options)
    .then(async function (response) {
      //console.log(response.data);

      data = response.data;
      console.log(data.data.length);
      if (data.data.length == 0) {
        res.send();
      }
      const myJSON = JSON.stringify(data.data);
      res.send(myJSON);
    })
    .catch(function (error) {
      //console.error(error);
      res.send();
    });


  }catch{

  }
   
  //res.send();
});

app.listen(port, () => {
  console.log(`My Bea listening on port ${port}`);
});
