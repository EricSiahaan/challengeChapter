const { comments } = require("../models");

class CommentFunction {
  static postComment(req, res) {
    const getBody = req.body;
    const userId = req.session.userId;

  comments.create({
      comment: getBody.comment,
      login_date: Date.now(),
      UserId: userId,
    })
      .then(res.redirect("/profile"))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = CommentFunction;
