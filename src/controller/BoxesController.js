const Box = require("../models/Box");


class BoxesController{

    async show(req,res){
        //Populate esta trasendo todos os dados do file e ordernando desc 
        const box = await Box.find().toArray(function(err, result) {
            if (err) throw err;
            console.log(result);
            
          });
        
        return res.box;
    }

}

module.exports = new BoxesController();