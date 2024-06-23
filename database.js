const{createPool}= require('mysql');
const pool=createPool({
    host:"sql204.infinityfree.com",
    user:"if0_36769694",
    password:"hi6Wr0q5559",
    database:"if0_36769694_gymsengine",
    connectionLimit:10
}

)
pool.query('SELECT * FROM `member_info` WHERE 1', (err, result, field)=>{
    if(err){
        return console.log(err);
    }
    return console.log(result);
    }
)