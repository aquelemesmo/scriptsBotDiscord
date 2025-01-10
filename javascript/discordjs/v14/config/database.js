const chalk = require('chalk');
const mongoose = require('mongoose');

class Database {
    constructor() {
        this.connection = null;
    }

    connect() {
        const mongo_url = "your-mongo-url";
        console.log(`${chalk.redBright(`[DATABASE]`)} ${chalk.blueBright(`Started connecting to MongoDB`)}`);
        mongoose.connect(mongo_url, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }).then(() => {
            console.log(`${chalk.redBright(`[DATABASE]`)} ${chalk.yellowBright(`Connected to mongoDB`)}`);
            this.connect = mongoose.connection;
        }).catch(err => {
            console.error(err);
        })
    }
}
module.exports = Database;

///// creditos: Manji118
