import pkg from 'mongoose';
const { Schema, model } = pkg;


const userskSchema = new Schema({
    id: {
        type: String,
        default: function () {
            let id = '';
            const caracteres = 'ABCDEFGHILMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_-+';
            for (let i = 0; i < 12; i++) {
                id += caracteres.charAt(Math.floor(Math.random() * caracteres.length))
            }
            return id;
        }
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    city: {
        type: String,
        required: true,
    },
    select: {
        type: Boolean,
        default: false
    },
}, {
    timestamps: true,
    versionKey: false
});

export default model('users', userskSchema)

