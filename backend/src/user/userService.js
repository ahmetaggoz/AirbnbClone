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

module.exports.getCountriesFromDBService =  (regionName)=>{
        return new Promise((resolve, reject)=>{
            try {
                userModel.regions.find({name: regionName.name}).toArray().then(datam => datam = datam[0]).then(datam => datam = datam.geometry).then((data)=>{
                    let result = userModel.listings.find({
                        'address.location': {
                            '$geoWithin': {
                                '$geometry': data
                            }
                        }
                    }).limit(20).toArray()
                    resolve(result)
                })
            } catch (error) {
                reject(false)
            }
        })
}
