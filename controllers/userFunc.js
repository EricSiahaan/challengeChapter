const { users } = require("../models");

class AccountProcess {
  static async postSignUp(req, res) {
    let result = users.AccountProcess()
    res.status(200).json(result)
    const getBody = await req.body;
    

    users.create(getBody)
    // let result = users.AccountProcess()
    //    res.status(200).json(result)
      .then(res.redirect("/signIn"))
      console.log("ok")
      res.status(200).json(result)
     
      .catch((err) => res.status(400).json(err));
  }

  static async postSignIn(req, res) {
    try {
      const getBody = req.body;
    const query = {
      where: { user_name: getBody.user_name, password: getBody.password, email: getBody.email },
    };
      users.findOne(query)
      
    
      .then((result) => {
        if (!result) {
          res.render("signIn", { alert: "User Not Found!" });
        } else {
          
          req.session.isLogin = true;
          req.session.userId = result.id;
          res.redirect("/welcome_player");
        }
      })
      
    } catch (error) {((err) => res.status(500).json(err));
      
    }
    
   
    // const getBody = req.body;
    // const query = {
    //   where: { user_name: getBody.user_name, password: getBody.password, email: getBody.email },
    // };
    
    // users.findOne(query)
    
    //   .then((result) => {
    //     if (!result) {
    //       res.render("signIn", { alert: "User Not Found!" });
    //     } else {
          
    //       req.session.isLogin = true;
    //       req.session.userId = result.id;
    //       res.redirect("/welcome_player");
    //     }
    //   })
      // .catch((err) => res.status(500).json(err));
  }

  static postChangePassword(req, res) {
    const getBody = req.body;
    const query = {
      where: { email: getBody.email },
    };
    const newData = {
      password: getBody.password,
      confirm_password: getBody.confirm_password,
    };

    users.update(newData, query)
      .then(res.redirect("/signIn"))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = AccountProcess;
