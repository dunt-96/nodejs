const db = require('../models/index')

let getAllCode = (allCodeId) => {
    return new Promise(async (resolve, reject) => {
       try {
        if(!allCodeId){
            return resolve({
                status: false, 
                message: 'Id is wrong'
            });
        }
        
        if(allCodeId === 'ALL'){
           return await db.Allcode.findAll().then((data) => {
                if(data){
                 resolve(data);
                }
            });
        }

        await db.Allcode.findOne({
            where: {
                id: allCodeId
            }
        }).then((data) => {
            if(data){
             resolve(data);
            }
        });
      
       } catch (error) {
        reject(error);
       }
    });
}

module.exports = {
    getAllCode
}