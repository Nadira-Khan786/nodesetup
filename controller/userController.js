const userModel = require("../models/user");

// createUser function

const createUser = async (req, res) => {
  try {
    const { body } = req;
    const { username, phoneNumber } = body;
    if (!username) {
      return res.status(400).send({
        message: "please enter username.",
        success: false,
      });
    }
    else if (!phoneNumber) {
      return res.status(400).send({
        message: "please enter phone number.",
        success: false,
      });
    }

    let userData = await userModel.findOne({ username: username });
    if (userData) {
      return res.status(400).send({
        message: "user already exist.",
        success: false,
      });
    }
    else {
      let data = body;
      let result = await userModel(data).save();
      res.status(200).json({
        data: result,
        message: "create user  successfully.",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
};

// getUser function

const getuser = async (req, res) => {
  try {
    const { query } = req;
    const { id, phoneNumber } = query;
    let condition = { $and: [] }
    condition.$and.push({ isDeleted: false });
    if (id) {
      condition.$and.push({ _id: id, });
    }
    if (phoneNumber) {
      condition.$and.push({ phoneNumber: phoneNumber, });
    }
    const data = await userModel.find(condition);
    if (!data) {
      return res.status(400).send({
        message: "user is not exits.",
        success: false,
      });
    }
    else {
      res.status(200).json({
        data: data,
        message: "get user successfully.",
        success: true,
      });
    }
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
};


// updateUser function

const updateuserDetail = async (req, res) => {
  try {
    const { query } = req;
    const { id } = query;
    if (!id) {
      return res.status(400).json({
        msg: "Bad Request",
      });
    }
    const result = await userModel.findByIdAndUpdate(
      id,
      {
        $set: { ...body },
      }
    );
    if (!result) {
      return res.status(400).send({
        message: "user is not exits.",
        success: false,
      });
    }
    res.status(200).json({
      message: "Updated  successfully.",
      success: true,
      data: result,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
};


// deleteUser function

const deleteuserDetail = async (req, res) => {
  try {
    const { query } = req;
    const { id, phoneNumber } = query;
    let condition = { $and: [] }
    condition.$and.push({ isDeleted: false });
    if (id) {
      condition.$and.push({ _id: id, });
    }
    if (phoneNumber) {
      condition.$and.push({ phoneNumber: phoneNumber, });
    }
    await userModel.deleteMany(condition);
    res.status(200).json({
      message: "Deleted successfully.",
      success: true,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      message: error.message,
    });
  }
};
// get user list 

const getAllUsers = async (req, res) => {
  try {
    let result = await userModel.find({
      $and: [
        { $or: [{ isDeleted: { $exists: false } }, { isDeleted: false }] },
        {
          status: true,
        },
      ],
    });
    if (result) {
      return res.status(200).json({
        responseCode: 200,
        message: "user get list successfully",
        data: result,
        success: true,
      });
    } else {
      return res.status(401).json({
        responseCode: 401,
        success: false,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message ? error.message : "Unexpected error occure.",
      success: false,
    });
  }
};


module.exports = {
  createUser, getuser, updateuserDetail, deleteuserDetail, getAllUsers
};
