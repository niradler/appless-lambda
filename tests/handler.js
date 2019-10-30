const Request = require("../helpers/request");
const Response = require("../helpers/response");

const asyncCatch = async (fn, params) => {
  const response = [null, null];

  try {
    const res = await fn(params);
    response[1] = res;
  } catch (error) {
    response[0] = error;
  }

  return response;
};

const handler = async (req, res) => {
  console.log(req.get(httpMethod), req.get(httpMethod), req.params);
  const [error, success] = await asyncCatch(async () => {
    const delay = ms => new Promise(resolve => setTimeout(() => resolve(), ms));
    await delay(1000);
    return { message: "ok" };
  });

  if (error) {
    console.error(error);

    res.setStatus(500);
    res.json({ error: error.message });
  }

  res.json(success);
};

const httpMiddleware = handler => (event, context, callback) => {
  const req = new Request(event, context);
  const res = new Response(context, callback);

  return handler(req, res);
};
