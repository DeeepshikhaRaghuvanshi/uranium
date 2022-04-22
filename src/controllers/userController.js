const jwt = require("jsonwebtoken");
const userModel = require("../models/userModel");

const createUser = async function (abcd, xyz) {
  //You can name the req, res objects anything.
  //but the first parameter is always the request 
  //the second parameter is always the response
  let data = abcd.body;
  let savedData = await userModel.create(data);
  // console.log(abcd.newAttribute);
  xyz.send({ msg: savedData });
};

const loginUser = async function (req, res) {
  let userName = req.body.emailId;
  let password = req.body.password;

  let user = await userModel.findOne({ emailId: userName, password: password });
  if (!user)
    return res.send({
      status: false,
      msg: "username or the password is not corerct",
    });

  let token = jwt.sign(
    {
      userId: user._id.toString(),
      batch: "thorium",
      organisation: "FUnctionUp",
    },
    "functionup-thorium"
  );
  res.setHeader("x-auth-token", token);
  res.send({msg : " User successfully loged in"})
};


const getUserData = async function (req, res) {
  

  let userId = req.params.userId;
  let user = await userModel.findOne({emailId : userId});
  if(!userId)
    return res.send({ msg: "Enter id" })
  if (!user)
    return res.send({ status: false, msg: "No such user exists" });

  res.send({ status: true, data: user });
};

const updateUser = async function (req, res) {

  let userId = req.params.userId;
  let user = await userModel.findOne({emailId : userId});
  if(!userId)
    return res.send({ msg: "Enter id" })
  if (!user) {
    return res.send("No such user exists");
  }

  let userData = req.body;
  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, userData , {new : true});
  res.send({ status: true, data: updatedUser });
};

const deleteUser = async function(req,res){

  let userId = req.params.userId;
  let user = await userModel.findOne({emailId : userId});
  if(!userId)
    return res.send({ msg: "Enter id" })
  if (!user) {
    return res.send("No such user exists");
  }

  let updatedUser = await userModel.findOneAndUpdate({ _id: user._id }, {isDeleted : true},{new : true, upsert:true});
  return res.send({msg : updatedUser})


}
module.exports.createUser = createUser;
module.exports.getUserData = getUserData;
module.exports.updateUser = updateUser;
module.exports.loginUser = loginUser;
module.exports.deleteUser = deleteUser
