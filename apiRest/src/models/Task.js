import {Schema, model} from "mongoose";
const taskSchema = new Schema({
    id: string,
    name:{
type: string,
required: true,
trim: true
    },
    city: {
        type: string,
        required: true,
    },
    select: {
        type: Boolean,
        default: false
    },
},{
    timestamps: true,
    versionKey: false
});

export default model('Task', taskSchema)

