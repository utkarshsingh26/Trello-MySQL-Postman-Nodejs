const pool = require('../database/database');

exports.changeBoard = async (req,res) => {
    try{
       
        pool.query(`select title from boards where title=?`, [req.body.original], (err, result, fields) =>{
            if(err){
                return res.send(err);
            } else if(result.length == 0){
                return res.send(`The board you're trying to change does not exist`);
            } else{
                pool.query(`update boards set title=? where title=?`, [req.body.new,req.body.original], (err,result,fields) =>{
                    if(err){
                        return res.end(err);
                    }
                    console.log(result)
                    return res.send(result);
                })
            }

        })



    } catch(err){
        return res.send(err);
    }
}