const get = require("lodash.get");

class Request {
  constructor(event, context) {
    this.event = { ...event };
    this.context = context;
  }

  get(path, defaultValue = false) {
    return get(this.event, path, defaultValue);
  }

  get headers() {
    return get(this.event, "headers", {});
  }

  get queryStringParameters() {
    return get(this.event, "queryStringParameters", {});
  }

  get pathParameters() {
    return get(this.event, "pathParameters", {});
  }

  get params() {
    return {
      body: this.body,
      pathParameters: this.pathParameters,
      queryStringParameters: this.queryStringParameters
    };
  }

  get body() {
    let _body = "";
    try {
      _body = JSON.parse(get(this.event, "body", JSON.stringify({})));
    } catch (error) {}

    return _body;
  }
}

module.exports = Request;
