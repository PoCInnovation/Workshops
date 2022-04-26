import dotenv from "dotenv";
import mongoose from "mongoose"


dotenv.config()

const urlMongo = process.env.URL_MONGO 

const clientOptions = {
    useUnifiedTopology: true,
    useNewUrlParser   : true,
    dbName            : 'apinode'
};

export default module.exports.initClientDbConnection = async () => {
    try {
        if (urlMongo == undefined)
            throw Error("URL_MONGO env var not set")

        await mongoose.connect(urlMongo, clientOptions)
        console.log('Connected');
    } catch (error) {
        console.log(error);
        throw error;
    }
}