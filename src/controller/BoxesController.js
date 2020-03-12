const Box = require("../models/Box");


class BoxesController{

    async show(req,res){
        const {page = 1} = req.query;
        const box = await Box.paginate({}, {page, limit:10} );
        
        return res.json(box);

        
    }

}

module.exports = new BoxesController();