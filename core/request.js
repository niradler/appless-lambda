const get = require("lodash.get");

class _Request {
  constructor(event, context) {
    this.event = { ...event };
    this.context = context;
  }

  get(path, defaultValue = false) {
    return get(this.event, path, defaultValue);
  }

  get headers() {
    const headers = get(this.event, "headers", {});
    return headers ? headers : {};
  }

  get queryStringParameters() {
    const queryStringParameters = get(this.event, "queryStringParameters", {});
    return queryStringParameters ? queryStringParameters : {};
  }

  get pathParameters() {
    const pathParameters = get(this.event, "pathParameters", {});
    return pathParameters ? pathParameters : {};
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
    } catch (error) {
      console.error(error.message);
    }

    return _body ? _body : {};
  }
}

module.exports = _Request;
