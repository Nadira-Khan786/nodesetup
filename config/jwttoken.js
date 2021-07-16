var express = require("express");
var app = express();
var jwt = require("jsonwebtoken");
const config = require('./config.json');


var jwtMiddleware = function(req,res,next){
    
  if(!req.headers.authorization){
      res.status(401).json({status:'Missing authentication credentials.', type:"jwt.noToken"});
  }else{

  jwt.verify(req.headers.authorization.split(' ')[1],config.secret,function(err,decode){
    if(err){
      res.end("Unauthorized");
    }
    else{
	req.user = decode;
      next();
    }
  });
}
}

module.exports = jwtMiddleware;
