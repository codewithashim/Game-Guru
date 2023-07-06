const mongoose = require("mongoose");
const app = require("../app");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);
const crypto = require("crypto");

// const generateSecretKey = () => {
//   return crypto.randomBytes(32).toString("hex");
// };

// const secretKey = generateSecretKey();
// console.log(secretKey);

mongoose.set("strictQuery", false);

mongoose
  .connect("mongodb://localhost:27017/GameGuru", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`connection successful`);
  })
  .catch((e) => {
    console.log(`no connection`);
  });
