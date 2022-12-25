const express = require("express");

const router = express.Router();
const {
  createStudent,
  deleteStudent,
  getStudent,
  updateStudent,
  getAllStudents,
} = require("../controllers/students");

router.route("/addStudent").post(createStudent);
router.route("/getStudent").post(getStudent);
router.route("/getAllStudents").post(getAllStudents);
router.route("/deleteStudent").delete(deleteStudent);
router.route("/updateStudent").patch(updateStudent);

module.exports = router;
