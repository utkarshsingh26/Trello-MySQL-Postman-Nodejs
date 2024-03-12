const pool = require('../database/database');

exports.getAllBoards = async (req,res) => {
    try{

        let answer = [];

       pool.query(`select title from boards`, (err, result, fields) =>{
            if(err){
                return res.send(err).status(500);
            }
            for(let i=0; i<result.length; i++){
                answer.push(result[i].title);
                console.log(answer)
            }

            return res.send(answer);
        })


    } catch(err){
        return res.send(err).status(500);
    }
}