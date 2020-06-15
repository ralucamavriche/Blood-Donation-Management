<<<<<<< HEAD
const express = require('express');
const mongoose = require('mongoose');
const config = require('config');


=======
const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
const expressHbs = require("express-handlebars");
const path = require("path");
>>>>>>> 56cec98... Stylization comments
//Initializam expressul intr o variabila
const app = express();

//Bodyparser Middleware
app.use(express.json());
<<<<<<< HEAD
=======
app.engine(
  "hbs",
  expressHbs({
    extname: "hbs",
    defaultLayout: "",
    layoutsDir: "",
  })
);

app.set("view engine", "hbs");
>>>>>>> 56cec98... Stylization comments

// DB Config
const db = config.get("mongooseURI");

//Connect to Mongo
mongoose
<<<<<<< HEAD
     .connect(db,
          {
               useNewUrlParser: true,
               useUnifiedTopology: true,
               useCreateIndex: true

          })
     .then(() => console.log('MongoDB Connected...'))
     .catch(err => console.log(err));

//Use Routes
// app.get('/', (req, res) => {
//      return res.json({
//           msg: "Blood Donation Management"
//      });
// });

app.use('/api/donors', require('./routes/api/donors'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/request', require('./routes/api/request'));

=======
  .connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  })
  .then(() => console.log("MongoDB Connected..."))
  .catch((err) => console.log(err));

app.get("/api/tes2", (req, res) => {
     res.render("welcome", {
       title: "Hi, Raluca",
       message:
         "Aveti notificari noi. Bla bla bla.",
       secondMessage: "Bla bla",
       linkName: "Activate Account",
       linkTo: "http://localhost:3000/",
     });
     //   res.status(200).json({
     //     msg: "Welcome",
     //   });
   });
app.use("/api/email", require("./routes/api/email"));
app.use("/api/donors", require("./routes/api/donors"));
app.use("/api/users", require("./routes/api/users"));
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/request", require("./routes/api/request"));
>>>>>>> 56cec98... Stylization comments

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
