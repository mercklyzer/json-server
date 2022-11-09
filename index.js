// import the json files
const usersJson = require('./users.json');
const carsJson = require('./cars.json');

module.exports = () => {
    // return an object
    return {
        users: usersJson.users,
        cars: carsJson.cars
    }
}