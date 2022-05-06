const { users } = require("../../models");

class SignInValidation {
  static userValidation(req, res, next) {
    const getBody = req.body;
    const query = {
      where: { user_name: getBody.user_name, password: getBody.password, email: getBody.email },
    };

    users.findOne(query)
      .then((data) => {
        if (!data) {
          res.render("signIn", { alert: "User Not Found!" });
        } else {
          next();
        }
      })
      .catch((err) => res.status(500).json(err));
  }

  static userNameValidation(req, res, next) {
    const getUserName = req.body.user_name;
    const query = {
      where: { user_name: getUserName },
    };

    users.findOne(query)
      .then((data) => {
        if (!data) {
          res.render("signIn", { alert: "Wrong Input Username!" });
        } else {
          next();
        }
      })
      .catch((err) => res.status(500).json(err));
  }

  static emailValidation(req, res, next) {
    const getEmail = req.body.email;
    const query = {
      where: { email: getEmail },
    };

    users.findOne(query)
      .then((data) => {
        if (!data) {
          res.render("signIn", { alert: "Wrong Input Email!" });
        } else {
          next();
        }
      })
      .catch((err) => res.status(500).json(err));
  }

  static passwordValidation(req, res, next) {
    const getPassword = req.body.password;
    const getEmail = req.body.email;
    const query = {
      where: { password: getPassword, email: getEmail },
    };

    users.findOne(query)
      .then((data) => {
        if (!data) {
          res.render("signIn", { alert: "Wrong Password!" });
        } else {
          next();
        }
      })
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = SignInValidation;
