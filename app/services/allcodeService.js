const db = require("../models/index");

let getAllCode = (allCodeId, filter) => {
  return new Promise(async (resolve, reject) => {
    try {
      if (!allCodeId) {
        return resolve({
          status: false,
          message: "Id is wrong",
          result: [],
        });
      }

      if (allCodeId === "ALL") {
        if (filter) {
          return await db.Allcode.findAll({
            where: {
              type: filter,
            },
          }).then((data) => {
            if (data) {
              return resolve({
                status: true,
                message: "Success",
                result: data,
              });
            }
          });
        }

        return await db.Allcode.findAll().then((data) => {
          if (data) {
            return resolve({
              status: true,
              message: "Success",
              result: data,
            });
          }
        });
      }

      await db.Allcode.findOne({
        where: {
          id: allCodeId,
        },
      }).then((data) => {
        if (data) {
          resolve({
            status: true,
            message: "Success",
            result: data,
          });
        }
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = {
  getAllCode,
};
