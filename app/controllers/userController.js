const pool = require('../configs/database')
const user = require('../models/user')
const db = require('../models/index')
const CRUDServices = require('../services/CRUDService')
class UserController {
    async getAllUser(req, res) {
        await CRUDServices.getAllUser().then((data) => {
            return res.status(200).json({
                status: true,
                notice: "Success",
                data: data
            });
        });
    }

    async deleteUser(req, res) {
        await CRUDServices.findUserById(parseInt(req.params.id)).then(async (result) => {
            if (result.dataValues != null) {
                await CRUDServices.deleteUser(parseInt(req.params.id)).then((data) => {
                    if (data) {
                        return res.status(200).json({
                            status: true,
                            notice: "Xoa nguoi dung thanh cong",
                            data: data
                        })
                    }
                });
            }
        }).catch((err) => {
            return res.status(200).json({
                status: false,
                notice: "Xoa nguoi dung that bai",
            });
        });
    };

    async deleteAllUser(req, res) {
        await CRUDServices.deleteAllUser().then((result) => {
            if (result == 0) {
                return res.status(200).json({
                    status: true,
                    notice: "Xoa nguoi dung thanh cong",
                });
            }
        }).catch((err) => {
            return res.status(200).json({
                status: false,
                notice: "Xoa nguoi dung that bai",
            });
        });
    }

    async addUser(req, res) {
        await CRUDServices.checkIsExistUser(req.body).then(async (user) => {
            if (user.length != 0) {
                return res.status(200).json({
                    status: false,
                    notice: "Email da bi trung",
                    data: user
                });
            }

            let result = await CRUDServices.createNewUser(req.body);

            if (result.dataValues != null) {
                return res.send(JSON.stringify({
                    status: true,
                    notice: "Them nguoi dung thanh cong",
                    data: result
                }));
            }
            return res.send(JSON.stringify({
                status: false,
                notice: "Them nguoi dung that bai",
            }));
        });
    }

    async getUserById(req, res) {
        const user = db.User.findAll({
            where: {
                id: parseInt(req.params.id)
            }
        });


        return res.send(JSON.stringify({
            status: true,
            notice: "Success",
            data: user
        }));
    }

    async editUser(req, res) {
        await CRUDServices.editUser(req.body, req.params.id).then((data) => {
            return res.status(200).json({
                status: true,
                notice: "Sua thanh cong",
                data: data
            });
        });
    }
}

module.exports = new UserController;