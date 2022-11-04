const doctorService = require("../services/doctorService");

let getALlDoctor = async (req, res) => {
  try {
    let limited = req.query.limit;
    let roleId = req.query.roleId;
    await doctorService.getAllDoctor(limited, roleId).then((data) => {
      return res.status(200).json({
        status: true,
        message: "Success",
        data: data,
      });
    });
  } catch (error) {
    // return res.status(404).json(handleResult({}));
    return res.status(404).json({
      status: false,
      message: "Error from server...",
    });
  }
};

module.exports = {
  getALlDoctor,
};
