class Response {
  constructor(context, callback) {
    this.context = context;
    this.callback = callback;

    this.reset();
  }

  reset() {
    this.status = 200;
    this.headers = {};
  }

  createResponse(body = {}) {
    const success = {
      body,
      statusCode: this.status,
      headers: this.headers
    };
    this.reset();
    this.done(null, JSON.stringify(success));
  }

  json(body) {
    this.createResponse(JSON.stringify(body));
  }

  send(body) {
    this.createResponse(body);
  }

  setStatus(status) {
    this.status = status;
  }
  setHeaders(headers) {
    this.headers = headers;
  }

  redirect(url, redirectStatus = 301) {
    this.status = redirectStatus;
    this.headers = {
      Location: url
    };

    return createResponse();
  }

  done(error, success) {
    this.context.done(error, success);
  }

  get callback() {
    return this.callback;
  }
}

module.exports = Response;
