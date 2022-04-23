const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
 try{
  let data = abcd.body;
  let savedData = await userModel.create(data);
  xyz.status(201).send({ msg: savedData });
 }
 catch (err) {
  console.log("This is the error :", err.message)
  res.status(500).send({ msg: "Error", error: err.message })
}
};

const loginUser = async function (req, res) {
  try{
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.status(400).send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FunctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.status(200).send({ msg: " User successfully logged in" });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const getUserData = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findOne({ emailId: userId });
  if (!userId) return res.status(400).send({ msg: "Enter id" });
  if (!user) return res.status(404).send({ status: false, msg: "No such user exists" });
  res.status(200).send({ status: true, data: user });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const updateUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findOne({ emailId: userId });
  if (!userId) return res.status(400).send({ msg: "Enter id" });
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate(
    { _id: user._id },
    userData,
    { new: true }
  );
  res.status(200).send({ status: true, data: updatedUser });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

const postMesssage = async function(req,res){
  try{
  let message = req.body.message
  let user = await userModel.findById(req.params.userId)
  if(!user) return res.status(404).send({status: false, msg: 'No such user exists'})
  let updatedPosts = user.posts
  updatedPosts.push(message)
  let updatedUser = await userModel.findOneAndUpdate({_id: user._id},{posts: updatedPosts}, {new: true})
  return res.status(200).send({status: true, data: updatedUser})
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }

}

const deleteUser = async function (req, res) {
  try{
  let userId = req.params.userId;
  let user = await userModel.findOne({ emailId: userId });
  if (!userId) return res.status(400).send({ msg: "Enter id" });
  if (!user) {
    return res.status(404).send("No such user exists");
  }

  let updatedUser = await userModel.findOneAndUpdate(
    { _id: user._id },
    { isDeleted: true },
    { new: true, upsert: true }
  );
  return res.status(200).send({ msg: updatedUser });
  }
  catch (err) {
    console.log("This is the error :", err.message)
    res.status(500).send({ msg: "Error", error: err.message })
  }
};

module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser;
module.exports.postMesssage = postMesssage;
