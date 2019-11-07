class _Response {
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

    return success;
  }

  json(body) {
    return this.createResponse(JSON.stringify(body));
  }

  send(body) {
    return this.createResponse(body);
  }

  setStatus(status) {
    return (this.status = status);
  }
  setHeaders(headers) {
    return (this.headers = headers);
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
}

module.exports = _Response;
