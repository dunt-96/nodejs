let handleResult = (data) => {
  return {
    status: data.status,
    message: data.message,
    data: data.result,
  };
};

module.exports = handleResult;
