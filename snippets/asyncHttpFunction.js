const asyncHttpFunction = fn => async (req, res) => {
  console.log(req.get("httpMethod"), req.get("path"), req.params, req, event);
  const [error, success] = await asyncCatch(fn, { req, res });

  if (error) {
    console.error(error);

    res.setStatus(500);
    res.json({ error: error.message });
  }

  res.json(success);
};

module.exports = asyncHttpFunction;
