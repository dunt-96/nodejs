const pool = require('../configs/database')

class UserController {
    async getAllUser(req, res) {
        const [rows, fields] = await pool.execute('SELECT * FROM `users`');

        return res.send(JSON.stringify({
            status: true,
            notice: "Success",
            data: rows
        }));
    }

    async deleteUser(req, res) {
        const query = 'DELETE FROM `users` WHERE id = ' + req.params.id;

        const [rows, fields] = await pool.execute(query)

        console.log(rows.affectedRows);

        if (rows.affectedRows != 0)
            return res.send(JSON.stringify({
                status: true,
                notice: "Xoa nguoi dung thanh cong",
                data: rows
            }));

        return res.send(JSON.stringify({
            status: false,
            notice: "Xoa nguoi dung that bai",
        }));
    }

    async addUser(req, res) {
        console.log(req.body['email']);
        let { firstName, lastName, email, address } = req.body;

        const checkMailQuery = 'SELECT * FROM `users` WHERE email = \'' + email + '\'';

        const [rowsMail, fieldsMail] = await pool.execute(checkMailQuery);
        console.log(rowsMail.length);

        if (rowsMail.length != 0) {
            return res.send(JSON.stringify({
                status: false,
                notice: "Email da bi trung",
                data: rowsMail
            }));
        }

        const query = 'insert into users (firstName, lastName, email, address) values (?, ?, ?, ?)'
        const [rows, fields] = await pool.execute(query, [firstName, lastName, email, address]);

        console.log(rows.affectedRows);

        if (rows.affectedRows != 0)
            return res.send(JSON.stringify({
                status: true,
                notice: "Them nguoi dung thanh cong",
                data: rows
            }));

        return res.send(JSON.stringify({
            status: false,
            notice: "Them nguoi dung that bai",
        }));


    }

    async getUserById(req, res) {
        let data = [];
        pool.query(
            'SELECT * FROM `users`',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
                data = results;
            }
        );


        return res.send(JSON.stringify({
            status: true,
            notice: "Success",
            data: data
        }));
    }
    async editUser(req, res) {
        let data = [];
        pool.query(
            'SELECT * FROM `users`',
            function (err, results, fields) {
                console.log(results); // results contains rows returned by server
                console.log(fields); // fields contains extra meta data about results, if available
                data = results;
            }
        );


        return res.send(JSON.stringify({
            status: true,
            notice: "Success",
            data: data
        }));
    }
}

module.exports = new UserController;