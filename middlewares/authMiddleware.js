import jwt from "jsonwebtoken";

import User from "../models/userModel.js";

const authenticateToken = async (req, res, next) => {
  try {
    const token =
      req.headers["authorization"] &&
      req.headers["authorization"].split(" ")[1];

    if (!token) {
      return res.status(401).json({
        succeeded: false,
        error: "No token avilable",
      });
    }
    req.user = await User.findById(
      jwt.verify(token, process.env.JWT_SECRET).userId
    );

    next();
  } catch (error) {
    res.status(401).json({
      succeeded: false,
      error: "Not authorized",
    });
  }
};

export { authenticateToken };
