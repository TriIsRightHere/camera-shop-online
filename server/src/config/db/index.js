const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://127.0.0.1/snapcommerce');
        console.log("Connect successfully!");
    }
    catch (error) {
        console.log("Failed")
    }
}
module.exports = { connect }