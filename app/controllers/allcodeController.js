const allcodeService = require("../services/allcodeService");
const handleResult = require("../helper/hanle_result");
let getAllCode = async (req, res) => {
  await allcodeService.getAllCode(req.body.id, req.query.type).then((data) => {
    return res.status(200).json(handleResult(data));
  });
};

module.exports = {
  getAllCode,
};
