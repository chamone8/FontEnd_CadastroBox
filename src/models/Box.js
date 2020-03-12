const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

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

Box.plugin(mongoosePaginate);
module.exports = mongoose.model('Box', Box)