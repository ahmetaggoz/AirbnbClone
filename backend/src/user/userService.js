const userModel = require('./userModel');

module.exports.getDataFromDBService = () =>{
    return new Promise(function checkURL(resolve, reject){
        try {
            const result = userModel.listings.find().limit(20).toArray()
            resolve(result)
        } catch (error) {
            reject(false)
        }
    })
}

module.exports.getCountriesFromDBService = (regionName) =>{
    return new Promise(function checkURL(resolve, reject){
        try {
            const region = userModel.regions.find({name: regionName.name}).toArray()
            region.then(datalarim=>{
                const countries = userModel.listings.find({
                    'address.location': {
                        '$geoWithin': {
                            '$geometry': {
                                'type': datalarim[0].geometry.type,
                                'coordinates': datalarim[0].geometry.coordinates
                            }
                        }
                    }
                }).toArray()
                resolve(countries)
                console.log(countries)
            })
        } catch (error) {
            reject(false)
        }
    })
}

