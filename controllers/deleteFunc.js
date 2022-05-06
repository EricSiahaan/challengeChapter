const { Comments } = require("../models");

class DeleteFunc {
  static postDelete(req, res) {
    const query = {
      where: { UserId: req.session.userId },
    };
    Comments.destroy(query)
      .then(res.redirect("/welcome_player"))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = DeleteFunc;
