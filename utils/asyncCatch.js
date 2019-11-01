const asyncCatch = async (fn, params) => {
  const response = [null, null];

  try {
    const res = await fn(...params);
    response[1] = res;
  } catch (error) {
    response[0] = error;
  }

  return response;
};

module.exports = asyncCatch;
