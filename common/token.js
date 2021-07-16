const common = require('./crypto')
const jwt = require("jsonwebtoken");

//JWT Authentication
const authorisedUser = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    return res.status(401).json({
        message: "Unauthorized!",
        success: false // token not found
      });
  } else {
    try {
      const tokenData = jwt.verify(token, common.secret);
      req.currentUser = tokenData;
      next();
    } catch (error) {
      return res.status(401).json(
        {
          message: 'Token has expired', //expire token
          success: false
        }
      )
    }
  }
};


//JWT Authentication
const authorise = (req, res, next) => {
  const token = req.headers['authorization'];
  if (!token) {
    req.currentUser = {};
    next();
  } else {
    try {
      const tokenData = jwt.verify(token, common.secret);
      req.currentUser = tokenData;
      next();
    } catch (error) {
      req.currentUser = {};
      next();     
    }
  }
};

module.exports = {
  authorisedUser,
  authorise
};
