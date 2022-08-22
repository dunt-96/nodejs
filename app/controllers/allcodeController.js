const allcodeService = require('../services/allcodeService');

let getAllCode = async (req, res) => {    
    await allcodeService.getAllCode(req.body.id).then((data) => {
        return res.status(200).json({
            status: true,
            message: 'Success',
            data: data
        });
    });
}

module.exports = {
    getAllCode
}