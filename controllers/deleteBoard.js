const pool = require('../database/database');

exports.deleteBoard = async(req,res) => {
    try{
        pool.query(`delete from boards where title=?`, [req.body.title], (err,result,fields) =>{
            if(err){
                return res.send(err).status(500);
            }
            return res.send('The board has been deleted');
        })
    } catch(err){
        res.send(err).status(500);
    }
}