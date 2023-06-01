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

module.exports.getCountriesFromDBService = (regionName="")=>{
    return new Promise(function (resolve, reject){
        try {
            let myList = []
            let result = userModel.regions.find({name: regionName.name}).toArray()
            result.then((hamVeri) => myList.push(hamVeri)).then(()=> {
                let result2 = userModel.listings.find({
                    'address.location': {
                        '$geoWithin': {
                            '$geometry': {
                                'type': myList[0][0]['geometry']['type'],
                                'coordinates': myList[0][0]['geometry']['coordinates']
                            }
                        }
                    }
                }).toArray()
                resolve(result2)
            })

        } catch (error) {
            reject(false)
        }
})}
