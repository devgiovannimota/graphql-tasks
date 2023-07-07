const NoPermissionError = require("../../errors/noPermissionError");
const generator = require("../../helpers/generator");

module.exports = ({ req }) => {
  const token = req.headers.authorization;
  return {
    validate() {
      try {
        const { id } = generator.verifyToken(token);
        return id;
      } catch (error) {
        throw new NoPermissionError("Você não está autenticado!");
      }
    },
  };
};
