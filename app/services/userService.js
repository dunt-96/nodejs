const db = require('../models/index');
var bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hash = await bcrypt.hashSync(password, salt);
            resolve(hash);
        } catch (error) {
            reject(error);
        }
    });
}

let createNewUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hasdPw = await hashUserPassword(data.password);

            const result = await db.User.create({
                email: data.email,
                password: hasdPw,
                firstName: data.firstName,
                lastName: data.lastName,
                address: data.address,
                phoneNumber: data.phoneNumber,
                gender: data.gender === '1' ? true : false,
                image: data.image,
                roleId: data.roleId,
                positionId: data.positionId
            });

            resolve(result);
        } catch (error) {
            reject(error);
        }
    });
}

let checkIsExistUser = (data) => {
    return new Promise(async (resolve, reject) => {
        try {
            console.log(data.email);
            const user = await db.User.findOne({
                raw: true,
                where: {
                    email: data.email
                }
            })
            resolve(user);

        } catch (error) {
            reject(error);
        }
    });
}

let findUserById = (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            const user = await db.User.findOne({
                where: {
                    id: id
                },
                attributes: {
                    exclude: ['password']
                },
                raw: true
            })
            resolve(user);

        } catch (error) {
            reject(error);
        }
    });
}

let deleteUser = async (id) => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.destroy({
                where: {
                    id: id
                }
            }).then((result) => {
                resolve(result);
            }).catch((err) => {
                resolve(err);
            });
        } catch (error) {
            reject(error);
        }
    });
}

let deleteAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.destroy({
                truncate: true
            }).then((data) => {
                resolve(data);
            });
        } catch (error) {
            reject(error);
        }
    });
}

let editUser = (data, id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hasdPw = await hashUserPassword(data.password);

            await db.User.update({
                password: hasdPw,
                firstName: data.firstName,
                lastName: data.lastName,
                email: data.email,
                address: data.address,
                phoneNumber: data.phoneNumber,
                image: data.image,
            }, {
                where: {
                    id: parseInt(id)
                }
            }).then((data) => {
                resolve(data);
            });
        } catch (error) {
            reject(error);
        }

    });
}

let getAllUser = () => {
    return new Promise(async (resolve, reject) => {
        try {
            await db.User.findAll({
                attributes: {
                    exclude: ['password']
                },
                raw: true
            }).then((data) => {
                resolve(data);
            });
        } catch (error) {
            reject(error);
        }
    });
}

let handleLogin = (data, user, callback) => {
    console.log(user.password);
    return new Promise(async (resolve, reject) => {

        let result = await bcrypt.compareSync(data.password, user.password);

        if (result) {
            return resolve(user);
        }

        callback("Error password");
    });
};

module.exports = {
    createNewUser,
    checkIsExistUser,
    deleteUser,
    findUserById,
    getAllUser,
    deleteAllUser,
    editUser,
    handleLogin
}