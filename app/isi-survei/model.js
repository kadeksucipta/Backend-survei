const {Schema, model} = require("mongoose")

const isiSurveiSchema = Schema({

    username: {
        type: String,
        required: [true, "Nama harus di isi"],
        // maxlength: [255, "Panjang nama maksimal adalah 255 karakter"]
    },

    email: {
        type: String,
        required: [true, "email harus di isi"],
        // maxlength: [255, "Panjang maksimal kelurahan adalah 255 karakter"]
    },

    pekerjaan: {
        type: String,
        // enum: ["stduent", "employe"],
        // default: "employe"
    },

    gender: {
        type: String,
        // enum: ["male", "female", "other"],
        // default: "male"
    },

    languages: {
        type: String,
        // default: "html"
    },

    // detail: {
    //     type: String,
    //     required: [true, "detail harus di isi"],
    //     maxlength: [255, "Panjang maksimal detail adalah 255 karakter"]
    // },

    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
}, {timestamps: true});

module.exports = model("IsiSurvei", isiSurveiSchema)