import IUser from "@/interfaces/IUser";
import Generator from "@/util/Generator";
import { Schema, model } from "mongoose";

const schema = new Schema({
    _id: Generator.generateSnowflake(),
    email: {
        type: String,
        required: false
    },
    password: {
        type: String,
        required: false
    },
    lastLogin: {
        type: Date,
        default: new Date()
    },
    secret: {
        type: String,
        default: Generator.generateSecret()
    }
}, { _id: false });

export default model<IUser>("users", schema, "users");