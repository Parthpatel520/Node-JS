// 7)CREATE STUDENT , USER & EMPLOYEE OBJECT AND CALLED INTO ANOTHER MODULE EXPORTS.

const student = {
  stdid: "001",
  stdFname: "parth",
  stdLname: "chhatrala",
  DOB: "13-01-2004",
  stdAge: "18",
  course: "Web Developer",
};

const user = {
  userid: "001",
  userFname: "parth",
  userLname: "chhatrala",
  userEmail: "parth@gmail.com",
  userPassword: "parth@123",
  userCpassword: "parth@123",
};

const employee = {
  empid: "001",
  empFname: "parth",
  empLname: "chhatrala",
  empEmail: "parth@gmail.com",
  empPassword: "parth@123",
  empjoiningDate: "26-jul-2023",
};

module.exports = {
  employee,
  user,
  student,
};
