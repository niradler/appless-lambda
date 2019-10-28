class Response {
  constructor(context) {
    this.context = context;
    this.status = 200;
    this.headers = {};
  }

  json(body) {}
  send(body) {}
  render(filename) {}

  setStatus(status) {
    this.status = status;
  }
  setHeaders(headers) {
    this.headers = headers;
  }
  redirect(path) {
    this.status = 302;
  }

  redirect() {}
  redirect() {}
  redirect() {}
}

module.exports = Response;
