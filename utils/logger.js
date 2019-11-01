const bunyan = require("bunyan");
const bformat = require("bunyan-format");
const formatOut = bformat({ outputMode: "short" });

const app = process.env.APP_NAME || "my-app";

let streams = [{ stream: formatOut }];

const logger = bunyan.createLogger({
  name: app,
  streams
});

module.exports = logger;
