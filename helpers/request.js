const get = require("lodash.get");

const request = (event, extend) => {
  const obj = { ...event, ...extend };

  obj.safeGet = (path, defaultValue = false) => get(event, path, defaultValue);
  obj.safeGet = (path, defaultValue = false) => get(event, path, defaultValue);

  if (obj.httpMethod) {
    try {
      obj.body = JSON.parse(get(obj, "body", JSON.stringify({})));
    } catch (error) {
      obj.body = get(obj, "body", "");
    }

    obj.headers = get(obj, "headers", {});
    obj.queryStringParameters = get(obj, "queryStringParameters", {});
    obj.pathParameters = get(obj, "pathParameters", {});
  }

  return obj;
};

module.exports = request;
