const User = require("../models/User");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, UnauthenticatedError } = require("../errors");

const register = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.find({ email });

  if (user.length) {
    throw new UnauthenticatedError("User already Exists");
  }
  const userInfo = await User.create({ email, password });
  const accessToken = await userInfo.createJWT();
  res.status(StatusCodes.CREATED).json({ userInfo, accessToken });
};

const login = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    throw new BadRequestError("Please provide email and password");
  }
  const user = await User.findOne({ email });
  if (!user) {
    throw new UnauthenticatedError("Email is not registered");
  }
  const isPasswordCorrect = await user.comparePassword(password);
  if (!isPasswordCorrect) {
    throw new UnauthenticatedError("Invalid password");
  }
  // compare password
  const accessToken = user.createJWT();
  res.status(StatusCodes.OK).json({ user, accessToken });
};

module.exports = {
  register,
  login,
};
