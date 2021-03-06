const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
mongoose.set("useCreateIndex", true);
const bodyParser = require("body-parser");
const cors = require("cors");
const passport = require("passport");

const users = require("./routes/user");
const posts = require("./routes/posts");

//set up environment
dotenv.config();

//connection of mongodb
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true });

const app = express();

//activate body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use(passport.initialize());
require("./config/passport")(passport);

//obtain user info
app.use("/api/users", users);
//obtain user posts
app.use("/api/posts", posts);
//run app
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
