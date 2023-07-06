const express = require("express");
const path = require("path");
const app = express();
require("./db/conn");
const hbs = require("hbs");
const crypto = require("crypto");
const session = require("express-session");
const authRouter = require("./modules/auth/auth.router");
const tornamentRouter = require("./modules/tonaments/tonaments.router");
const paymentRouter = require("./modules/payment/payment.router");
const port = process.env.PORT || 5000;

const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(static_path));
app.set("view engine", "hbs");
app.set("views", template_path);
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/login", (req, res) => {
  res.render("login");
});
app.get("/booking", (req, res) => {
  res.render("booking");
});

app.get("/signin", (req, res) => {
  res.render("signin");
});
app.get("/tournamentpage", (req, res) => {
  res.render("tournamentpage");
});

app.get("/cart", (req, res) => {
  res.render("cart");
});

app.get("/step3", (req, res) => {
  res.render("step3");
});

app.get("/payment", (req, res) => {
  res.render("payment");
});

///////////////////////////////////////////////
//                Middelwaire               //
/////////////////////////////////////////////*/

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString("hex");
};

const secretKey = generateSecretKey();
console.log(secretKey);

// Set up session middleware
app.use(
  session({
    secret: secretKey,
    resave: false,
    saveUninitialized: true,
  })
);

app.use(authRouter);
app.use(tornamentRouter);
app.use(paymentRouter);

///////        End of Middelwaire     ////////

app.listen(port, () => {
  console.log(`server is running ${port}`);
});

module.exports = app;
