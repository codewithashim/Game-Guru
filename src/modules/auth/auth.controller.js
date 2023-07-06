const UserModel = require("./auth.models");

const signUp = async (req, res) => {
  try {
    console.log(req.body);
    const { email, password, username } = req.body;

    const signinUser = new UserModel({
      username: username,
      email: email,
      password: password,
    });

    await signinUser.save();
    console.log(signinUser);

    res.status(201).render("./login");
  } catch (error) {
    res.status(400).send(error);
  }
};

const signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(req.body);
    const user = await UserModel.findOne({ email });

    if (!user) {
      return res.status(404).send("User not found");
    }

    if (user.password !== password) {
      return res.status(401).send("Password is incorrect");
    }

    req.session.userId = user._id;
    res.locals.loggedIn = true;
    res.redirect("/"); // Redirect to the home page
  } catch (error) {
    console.log("An error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

const logOut = async (req, res) => {
  try {
    req.session.destroy();
    res.redirect("/");
  } catch (error) {
    console.log("An error occurred:", error);
    res.status(500).send("Internal Server Error");
  }
};

const authController = {
  signUp,
  signIn,
  logOut,
};

module.exports = authController;
