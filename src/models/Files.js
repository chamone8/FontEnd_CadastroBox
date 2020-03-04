const mongoose = require('mongoose');

const File = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    path:{
        type: String,
        required: true,
    },
},
{
    timestamps: true,// cria dois campos de data de criação e de alteração
    toObject: {virtuals:true},
    toJSON: {virtuals: true}
});

File.virtual('url').get(function(){
    return `http://localhost:90/files/${encodeURIComponent(this.path)}`;
});
module.exports = mongoose.model('File', File);