class App {
  constructor(fn) {
    this.fn = fn;
    this.event = {};
    this.context = {};
    this.callback = () => process.exit(1);
    this.middlewares = [];
  }

  controller(fn) {
    this.fn = fn;
  }

  use(fn, promise = false) {
    this.middlewares.push({ fn, promise });
  }

  async run() {
    const { event, context, callback } = this;
    let params = { event, context, callback };
    for (let i = 0; i < this.middlewares.length; i++) {
      const mid = this.middlewares[i];
      let next = {};

      try {
        if (mid.promise) {
          next = await mid.fn(params);
        } else {
          next = mid.fn(params);
        }
      } catch (error) {
        throw error;
      }

      params = { ...params, ...next };
    }

    return this.fn(params);
  }

  start(event, context, callback) {
    this.event = event;
    this.context = context;
    this.callback = callback;

    return this.run();
  }
}

module.exports = App;
