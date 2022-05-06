const { scores } = require("../models/");

class ScoreProcess {
  static postScore(req, res) {
    const getBody = req.body;
    const getUserId = req.session.userId;

    scores.create({
      score: +getBody.score,
      UserId: getUserId,
    })
      .then(res.redirect("/game"))
      .catch((err) => res.status(500).json(err));
  }
}

module.exports = ScoreProcess;
