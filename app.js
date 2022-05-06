const express = require("express");
const session = require("express-session");

const router = require("./router");
//const router = require ("./router/index")

const port = 3000;
const app = express();
const cors = require("cors")
app.use(cors())

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.set("view engine", "ejs");
app.use(express.static("./public"));
app.use(
  session({
    secret: "mySecret",
    isLogin: false,
    userId: 0,
  })
);

app.use(router);

app.listen(port, () => console.log(`Server running on port ${port}..`));
