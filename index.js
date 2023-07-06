const { ApolloServer } = require("apollo-server");
const graphql = require("./src/graphql");
const GitHubService = require("./src/services/GitHub.service");
const UserRegisterService = require("./src/services/user.register.service");
const tasksRegisterService = require("./src/services/tasks.register.service");

const server = new ApolloServer({
  ...graphql,
  dataSources: () => ({
    gitHubService: GitHubService,
    userRegisterService: UserRegisterService,
    tasksService: tasksRegisterService,
  }),
  context: ({ req }) => {
    const user_id = req.headers.authorization;
    return {
      user_id,
    };
  },
});

server.listen().then(({ url }) => console.log(url));
