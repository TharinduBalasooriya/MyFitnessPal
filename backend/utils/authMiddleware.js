const jwt = require("jsonwebtoken");

let verifyToken = function (req, res, next) {
  let token = req.headers["authtoken"];

  if (!token) {
    return res.status(403).send({ message: "No token available!!!" });
  }
  jwt.verify(token, "key", (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unotherized user" });
    }
    req.userId = decoded.id;
    next();
  });
};
module.exports = verifyToken;
