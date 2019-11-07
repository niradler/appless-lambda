const Request = require("../core/Request");
const Response = require("../core/Response");

const httpMiddleware = ({ event, context, callback }) => {
  const req = new Request(event, context);
  const res = new Response(context, callback);

  return { req, res };
};

module.exports = httpMiddleware;
