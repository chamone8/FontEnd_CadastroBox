const multer = require('multer');
const path = require('path');
const crypto = require('crypto');

module.exports = {
    dest: path.resolve(__dirname, '..', '..', 'temp'),//server para definir um local seguro
    storage: multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, path.resolve(__dirname, '..', '..', 'temp'));//serve pra infomar que os arquivos irão ficar local
        },
        //esta função define um nome unico pra pasta 
        filename: (req, file, cb) => {
            crypto.randomBytes(16, (err, hast) => {
                if (err) cb(err);

                file.key = `${hast.toString('hex')}-${file.originalname}`;
                cb(null, file.key);
            })
        }
    })
};