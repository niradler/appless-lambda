# appless-lambda

```
npm i -S appless-lambda
```

```
const App = require("appless-lambda");
const httpMiddleware = require("appless-lambda/middlewares/httpMiddleware");

const hello = async ({ req, res }) => {
  const { params } = req;

  return res.json({ params, midUse: req.event.midUse });
};

const app = new App();

app.use(params => {
  params.event.midUse = true;
  return params;
});

app.use(httpMiddleware);

app.controller(hello);

module.exports.handler = app.start.bind(app);

```