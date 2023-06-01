const userService = require('./userService')

const getUserControllerFn = async (req, res) =>{
    let listings = await userService.getDataFromDBService();
    res.send({ "status": true, "data": listings })
}

const getCountriesControllerFn = async (req, res) => {
    let countries = await userService.getCountriesFromDBService(req.body);
    res.send({ "status": true, "data": countries})
}


module.exports = {getUserControllerFn, getCountriesControllerFn}