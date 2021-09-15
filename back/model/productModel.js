const connection = require('../utils/db');

//all products query
async function getAllProduct(){
    return await connection.queryAsync(
        `SELECT product.id AS prduct_id, product.name AS product_name, brand.id AS brand_id, brand.name AS brand_name, product_category.id AS product_category_id, product_category.name AS product_category_name, product.intro AS product_intro, product.creat_time AS create_time
        FROM product 
        INNER JOIN brand 
        ON product.brand=brand.id
        INNER JOIN product_category 
        ON product.category=product_category.id
        WHERE product.valid=1
        `
    );
}

module.exports={
    getAllProduct,
}

// SELECT table_column1, table_column2...
// FROM table_name1
// INNER JOIN table_name2 
// ON table_name1.column_name=table_name2.column_name;

// 'SELECT * FROM product INNER JOIN brand on product.brand=brand.id'
// 'SELECT brand.name AS brand_name, brand, product.id AS prduct_id FROM product INNER JOIN brand on product.brand=brand.id' 
