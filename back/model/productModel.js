const connection = require('../utils/db');

//all products query
async function getAllProduct(){
    return await connection.queryAsync('SELECT * FROM product WHERE valid=1');
}

module.exports={
    getAllProduct,
}