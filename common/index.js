const nodemailer = require("nodemailer");
//Email SMTP Transport
const smtpTransport = nodemailer.createTransport({
  service: "gmail",
  //host:"smtp.gmail.com",
  //port: 587,
  //secure: false,
  auth: {
        user: "nadira.khan.sdbg@gmail.com",
        pass: "Nadira123@"
      },
  tls: {
    rejectUnauthorized: false
}

});


//Form Validation
const formatValidationErr = (err, isString = false, delimeter = "<br>") => {
  if (typeof err !== "object") {
    return err;
  }
  var e = [];
  for (let i in err) {
    e.push(err[i].msg);
  }
  if (isString === false) {
    return e;
  }
  return e.join(delimeter);
};

const formatError = errors => {
  let errorObject = {};
  for (var i = 0; i < errors.length; i++) {
    const e = errors[i];

    errorObject[e.param] = e.msg;
  }

  return errorObject;
};

const getIpAddress = req => {
  var ip = null;
  try {
    ip =
      (req.headers["x-forwarded-for"] || "").split(",").pop() ||
      req.connection.remoteAddress ||
      req.socket.remoteAddress ||
      req.connection.socket.remoteAddress;
  } catch (ex) {
    console.log(ex);

    ip = null;
  }
  return ip;
};

const isValidEmail = email => {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
};

module.exports = {
  formatValidationErr,
  getIpAddress,
  formatError,
  isValidEmail,
  smtpTransport
};