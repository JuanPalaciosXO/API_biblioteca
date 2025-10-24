// db.js
import mongoose from "mongoose";

const conectarDB = async () => {
try{
mongoose.connect("mongodb://localhost:27017/biblioteca", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});
        console.log("Conexcion exitosa");
    } catch(error) {
        console.error("conexcion fallida");
    }
};
export default conectarDB;