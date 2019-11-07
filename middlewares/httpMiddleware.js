const Request = require("../core/request");
const Response = require("../core/response");

const httpMiddleware = ({ event, context, callback }) => {
  const req = new Request(event, context);
  const res = new Response(context, callback);

  return { req, res };
};

module.exports = httpMiddleware;
