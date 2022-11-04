const db = require("../models/index");

let getAllDoctor = async (limitInput, role) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.User.findAll({
        limit: +(limitInput ?? 10),
        where: {
          roleId: role ?? "R2",
        },
        order: [["createdAt", "DESC"]],
        attributes: {
          exclude: ["password", "image"],
        },
        include: [
          {
            model: db.Allcode,
            as: "positionData",
            attributes: ["valueEn", "valueVi"],
          },
          {
            model: db.Allcode,
            as: "genderData",
            attributes: ["valueEn", "valueVi"],
          },
        ],
        raw: true,
        nest: true,
      }).then((data) => {
        return resolve(data);
      });
    } catch (error) {
      reject(error);
    }
  });
};

module.exports = { getAllDoctor };
