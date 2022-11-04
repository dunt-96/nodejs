const db = require("../models/index");
const userService = require("../services/userService");
class UserController {
  async getAllUser(req, res) {
    await userService.getAllUser().then((data) => {
      return res.status(200).json({
        status: true,
        notice: "Success",
        data: data,
      });
    });
  }

  async deleteUser(req, res) {
    await userService
      .findUserById(parseInt(req.params.id))
      .then(async (result) => {
        if (result.dataValues != null) {
          await userService.deleteUser(parseInt(req.params.id)).then((data) => {
            if (data) {
              return res.status(200).json({
                status: true,
<<<<<<< HEAD
                notice: "Xoa nguoi dung thanh cong",
=======
                notice: "Success",
>>>>>>> f79b8f6 (push)
                data: data,
              });
            }
          });
        }
      })
      .catch((err) => {
        return res.status(200).json({
          status: false,
<<<<<<< HEAD
          notice: "Xoa nguoi dung that bai",
=======
          notice: "Fail",
>>>>>>> f79b8f6 (push)
        });
      });
  }

  async deleteAllUser(req, res) {
    await userService
      .deleteAllUser()
      .then((result) => {
        if (result == 0) {
          return res.status(200).json({
            status: true,
<<<<<<< HEAD
            notice: "Xoa nguoi dung thanh cong",
=======
            notice: "Success",
>>>>>>> f79b8f6 (push)
          });
        }
      })
      .catch((err) => {
        return res.status(200).json({
          status: false,
<<<<<<< HEAD
          notice: "Xoa nguoi dung that bai",
=======
          notice: "Fail",
>>>>>>> f79b8f6 (push)
        });
      });
  }

  async addUser(req, res) {
    await userService.checkIsExistUser(req.body).then(async (user) => {
<<<<<<< HEAD
      if (user.length != 0) {
        return res.status(200).json({
          status: false,
          notice: "Email da bi trung",
=======
      if (user) {
        delete user.password;

        return res.status(200).json({
          status: false,
          notice: "Email is already exist! Plz try another email",
>>>>>>> f79b8f6 (push)
          data: user,
        });
      }

      let result = await userService.createNewUser(req.body);

      if (result.dataValues != null) {
<<<<<<< HEAD
        return res.send(
          JSON.stringify({
            status: true,
            notice: "Them nguoi dung thanh cong",
=======
        delete result.password;

        return res.send(
          JSON.stringify({
            status: true,
            notice: "New user was added",
>>>>>>> f79b8f6 (push)
            data: result,
          })
        );
      }
      return res.send(
        JSON.stringify({
          status: false,
<<<<<<< HEAD
          notice: "Them nguoi dung that bai",
=======
          notice: "Add fail",
>>>>>>> f79b8f6 (push)
        })
      );
    });
  }

<<<<<<< HEAD
  async getUserById(req, res) {
    const user = db.User.findAll({
      where: {
        id: parseInt(req.params.id),
      },
    });

    return res.send(
      JSON.stringify({
        status: true,
        notice: "Success",
        data: user,
      })
    );
  }

=======
>>>>>>> f79b8f6 (push)
  async editUser(req, res) {
    await userService.editUser(req.body, req.params.id).then((data) => {
      return res.status(200).json({
        status: true,
<<<<<<< HEAD
        notice: "Sua thanh cong",
=======
        notice: "Success",
>>>>>>> f79b8f6 (push)
        data: data,
      });
    });
  }

  async login(req, res) {
    // check email exist
    // compare pw
    // return userInfo
    // access token
    let email = req.body.email;
    let pw = req.body.password;

    if (!email || !pw) {
      return res.status(500).json({
        status: false,
        message: "Missing inputs parameter",
      });
    }

<<<<<<< HEAD
    await userService.checkIsExistUser(req.body).then(async (result) => {
      if (result) {
        function callback(msg) {
          return res.status(200).json({
            status: false,
            message: msg,
          });
        }

        await userService
          .handleLogin(req.body, result, callback)
          .then((result) => {
            if (result) {
              delete result.password;

              return res.status(200).json({
                status: true,
                message: "Success",
                data: result,
              });
            }
          });
      }

      return res.status(200).json({
        status: true,
        message: "Fail",
        data: "Error email",
      });
    });
=======
    try {
      await userService.checkIsExistUser(req.body).then(async (result) => {
        if (result) {
          function callback(msg) {
            return res.status(200).json({
              status: false,
              message: msg,
            });
          }

          // return res.status(200).json({
          //   status: true,
          //   message: "Success",
          // });

          return await userService
            .handleLogin(req.body, result, callback)
            .then((result) => {
              if (result) {
                delete result.password;

                return res.status(200).json({
                  status: true,
                  message: "Success",
                  data: result,
                });
              }
            });
        }

        return res.status(200).json({
          status: true,
          message: "Fail",
          data: "Error email",
        });
      });
    } catch (error) {
      return res.status(404).json({
        status: false,
        message: "Fail",
      });
    }
>>>>>>> f79b8f6 (push)
  }
}

module.exports = new UserController();
