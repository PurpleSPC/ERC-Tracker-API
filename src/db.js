const mongoose = require('mongoose');


module.exports = {
    connect: DB_HOST => {
        mongoose.connect(DB_HOST);
        //log an error if we fail to connect
        mongoose.connection.on('error', err => {
            console.error(err);
            console.log(
                'MongoDB connection error. Please make sure MongoDB is running'
            );
            process.exit();
        });
    },
    close: () => {
        mongoose.Connection.close();
    }
};