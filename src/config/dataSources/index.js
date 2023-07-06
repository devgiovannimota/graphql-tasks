const GitHubService = require("../../services/GitHub.service");
const tasksRegisterService = require("../../services/tasks.register.service");
const userRegisterService = require("../../services/user.register.service");

module.exports = () => ({
  gitHubService: GitHubService,
  userRegisterService: userRegisterService,
  tasksService: tasksRegisterService,
});
