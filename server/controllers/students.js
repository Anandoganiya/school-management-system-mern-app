const Student = require("../models/Student");
const { StatusCodes } = require("http-status-codes");
const { BadRequestError, NotFoundError } = require("../errors");

const createStudent = async (req, res) => {
  console.log(req.body);
  const { name, age, email, sClass, section, rollNumber, mobile, address } =
    req.body;

  req.body.createdBy = req.user.userId;
  const studentInfo = await Student.create(req.body);
  res.status(StatusCodes.CREATED).json({ studentInfo });
};

const getStudent = async (req, res) => {
  const { emailId } = req.body;
  if (!emailId)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("Please provide valid email id");

  const students = await Student.findOne({
    email: emailId,
    createdBy: req.user.userId,
  });
  if (!students) {
    throw new NotFoundError(`No student with email ${emailId}`);
  }
  res.status(StatusCodes.OK).json({ students });
};

const updateStudent = async (req, res) => {
  const getStudentUpdateData = {};
  Object.entries(req.body).forEach(([key, value]) => {
    if (value) getStudentUpdateData[key] = value;
  });
  const { emailId, ...studentUpdateData } = getStudentUpdateData;

  if (!emailId)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("Please provide valid email id");
  const studentUpdated = await Student.findOneAndUpdate(
    { email: emailId, createdBy: req.user.userId },
    studentUpdateData,
    { new: true, runValidators: true }
  );
  if (!studentUpdated) {
    throw new NotFoundError(`No student with email id ${emailId}`);
  }
  res.status(StatusCodes.OK).json({ studentUpdated });
};

const deleteStudent = async (req, res) => {
  const { emailId } = req.body;
  console.log(emailId);
  if (!emailId)
    return res
      .status(StatusCodes.BAD_REQUEST)
      .json("Please provide valid email id");
  const deletedStudent = await Student.findOneAndDelete({
    email: emailId,
    createdBy: req.user.userId,
  });
  if (!deletedStudent) {
    throw new NotFoundError(`No student with email id ${emailId}`);
  }
  res.status(StatusCodes.OK).json({ deletedStudent });
};

const getAllStudents = async (req, res) => {
  const { userId } = req.user;
  if (!userId) {
    throw new NotFoundError(`No user loged in`);
  }
  const students = await Student.find({
    createdBy: userId,
  });
  return res.status(StatusCodes.OK).json({ students });
};

module.exports = {
  createStudent,
  deleteStudent,
  getStudent,
  updateStudent,
  getAllStudents,
};
