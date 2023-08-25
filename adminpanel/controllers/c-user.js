let userModel = require("../models/m-user");

const getDashboard = (req, res) => {
  res.render("index");
};

const getform = (req, res) => {
  res.render("form");
};

const getPostData = async (req, res) => {
  const checkuser = await userModel.findOne({ email: req.body.email });
  if (checkuser) {
    return res.send("Email already In Use");
  } else {
    const result = await userModel({
      id: 1,
      name: req.body.uname,
      email: req.body.email,
      password: req.body.password,
    });

    const res1 = await result.save();
    console.log("Data saved", res1);
    res.redirect('/')
  }

};

const checkuserData = async (req, res) => {
  const checkuser = await userModel.findOne({
    email: req.body.email,
    password: req.body.password,
  });
  if (checkuser) {
    res.cookie("UserName",checkuser.name)
    res.redirect("/admin");
  }else{
    res.send("User not found");
  }
};

module.exports = { getDashboard, getform, getPostData,checkuserData };
