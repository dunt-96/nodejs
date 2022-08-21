const pool = require('../configs/database')
const user = require('../models/user')
const db = require('../models/index')
class UserController {
    async getAllUser(req, res) {
        await db.User.findAll().then((data) => {
            return res.status(200).json({
                status: true,
                notice: "Success",
                data: data
            });
        });
    }

    // Delete everyone named "Jane"
    // await User.destroy({
    //   where: {
    //     firstName: "Jane"
    //   }
    // });
    async deleteUser(req, res) {
        await db.User.destroy({
            where: {
                id: parseInt(req.params.id)
            }
        }).then((data) => {
            if (data) {
                return res.status(200).json({
                    status: true,
                    notice: "Xoa nguoi dung thanh cong",
                    data: data
                })
            }
            return res.status(200).json({
                status: false,
                notice: "Xoa nguoi dung that bai",
                data: data
            })
        });
    };

    async deleteAllUser(req, res) {
        await db.User.destroy({
            truncate: true
        }).then((data) => {
            if (data == 0) {
                return res.status(200).json({
                    status: true,
                    notice: "Xoa thanh cong"
                });
            }
        });
    }

    async addUser(req, res) {
        let { firstName, lastName, email, address } = req.body;

        // const checkMailQuery = 'SELECT * FROM `users` WHERE email = \'' + email + '\'';

        // const [rowsMail, fieldsMail] = await pool.execute(checkMailQuery);
        // console.log(rowsMail.length);

        // if (rowsMail.length != 0) {
        //     return res.send(JSON.stringify({
        //         status: false,
        //         notice: "Email da bi trung",
        //         data: rowsMail
        //     }));
        // }

        const checkExistUser = await db.User.findAll({
            where: {
                email: email
            }
        })

        console.log(checkExistUser.length);

        if (checkExistUser.length != 0) {
            return res.send(JSON.stringify({
                status: false,
                notice: "Email da bi trung",
                data: checkExistUser
            }));
        }

        const result = await db.User.create({
            firstName: firstName,
            lastName: lastName,
            email: email,
            address: address
        });

        console.log(result);

        // const query = 'insert into users (firstName, lastName, email, address) values (?, ?, ?, ?)'
        // const [rows, fields] = await pool.execute(query, [firstName, lastName, email, address]);

        // console.log(rows.affectedRows);

        if (result.dataValues != null)
            return res.send(JSON.stringify({
                status: true,
                notice: "Them nguoi dung thanh cong",
                data: result
            }));

        return res.send(JSON.stringify({
            status: false,
            notice: "Them nguoi dung that bai",
        }));
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
        let { firstName, lastName, email, address } = req.body;
        // let query = 'update users set firstName = ?, lastName = ?, email = ?, address = ? where id = ?';
        // // let query1 = "update users set firstName = 'long', lastName = 'hoang', email = 'long@gmail.com', address = 'tp HCM' where id = 23";

        // const [rows, fields] = await pool.execute(query, [firstName, lastName, email, address, parseInt(req.params.id)]);

        // console.log(rows);
        // return res.send(JSON.stringify({
        //     status: true,
        //     notice: "Success",
        //     data: rows
        // }));

        // Change everyone without a last name to "Doe"
        await db.User.update({ firstName: firstName, lastName: lastName, email: email, address: address }, {
            where: {
                id: parseInt(req.params.id)
            }
        }).then((data) => {
            if (data)
                return res.status(200).json({
                    status: true,
                    notice: "Sua nguoi dung thanh cong",
                    data: data.dataValues
                });
        });
    }
}

module.exports = new UserController;