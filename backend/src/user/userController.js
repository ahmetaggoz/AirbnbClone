const userService = require('./userService')

const getUserControllerFn = async (req, res) =>{
    let data = await userService.getDataFromDBService();
    res.send({ "status": true, "data": data })
}

const getCountriesControllerFn = async (req, res) =>{
    let data = await userService.getCountriesFromDBService(req.body);
    res.send({ "status": true, "data": data })
}



module.exports = {getUserControllerFn, getCountriesControllerFn}