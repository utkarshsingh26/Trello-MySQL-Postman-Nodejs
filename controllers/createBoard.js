const pool = require('../database/database')

exports.createBoard = async(req,res) =>{
    try{

        let counter = 0;
        pool.query(`select * from boards`, (err, result, fields) => {
            if(err){
                console.log(err);
            }
            for(i=0; i<result.length;i++){
                if(result[i].title == req.body.title){
                    counter++;
                    return res.send('A board by the name already exists.').status(500);
                }
            }

            if(counter == 0){
                pool.query(`INSERT INTO boards (title) VALUES (?)`, [req.body.title], (err, result, fields) => {
                    if(err){
                        return res.send(err).status(500);
                    }
                    return res.send(`${req.body.title} Board was created`);
                })
            }
        })
  
    } catch(err){
        res.send(err)
    }
}