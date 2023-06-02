const userService = require('./userService')

const getUserControllerFn = async (req, res) =>{
    let data = await userService.getDataFromDBService();
    res.send({ "status": true, "data": data })
}

const getCountriesControllerFn = async (req, res) =>{
    try {
        let data = await userService.getCountriesFromDBService(req.body);
        res.send({ "status": true, "data": data })
    } catch (error) {
        console.error(error)
        process.exit(1)
    }
}



module.exports = {getUserControllerFn, getCountriesControllerFn}