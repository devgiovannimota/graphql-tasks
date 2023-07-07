const NoPermissionError = require("../../errors/noPermissionError");
const TaskNotFoundError = require("../../errors/taskNotFoundError");
const UserNotFoundError = require("../../errors/userNotFoundError");

module.exports = (error) => {
  if (error.originalError instanceof NoPermissionError) {
    return new Error(error.message);
  }
  if (error.originalError instanceof TaskNotFoundError) {
    return new Error(error.message);
  }
  if (error.originalError instanceof UserNotFoundError) {
    return new Error(error.message);
  }
  return error;
};
