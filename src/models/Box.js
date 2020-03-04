const mongoose = require('mongoose');

const Box = new mongoose.Schema({
    title: {
        type: String,
        //required: true,
    },
    files: [
        {
            type: mongoose.Schema.Types.ObjectId, ref: "File"
        }
    ]
},
{
    timestamps: true// cria dois campos de data de criação e de alteração

});

module.exports = mongoose.model('Box', Box)