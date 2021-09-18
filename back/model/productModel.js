const connection = require('../utils/db');

//all products query
const getAllProduct = async () => {
    return await connection.queryAsync(
        `SELECT product.id AS product_id, product.name AS product_name, brand.id AS brand_id, 
                brand.name AS brand_name, product_category.id AS product_category_id, 
                product_category.name AS product_category_name, product.creat_time AS create_time, 
                product.price AS product_price, sum(product_sku.sale) AS total_sale
        FROM product 
        INNER JOIN brand 
        ON product.brand=brand.id
        INNER JOIN product_category 
        ON product.category=product_category.id
        INNER JOIN product_sku
        ON product.id=product_sku.product_id
        WHERE product.valid=1
        GROUP BY product.id
        `
    );
}

const getImgList = async () => {
    return await connection.queryAsync(
        `SELECT * FROM product_img`
    );
}

const getBrandList = async () => {
    return await connection.queryAsync(
        `SELECT id, name FROM brand WHERE valid=1`
    )
}

module.exports={
    getAllProduct,
    getImgList,
    getBrandList,
}

// SELECT table_column1, table_column2...
// FROM table_name1
// INNER JOIN table_name2 
// ON table_name1.column_name=table_name2.column_name;

// 'SELECT * FROM product INNER JOIN brand on product.brand=brand.id'
// 'SELECT brand.name AS brand_name, brand, product.id AS prduct_id FROM product INNER JOIN brand on product.brand=brand.id' 

// select 單別aa,單號bb,sum(生產數量dd) as 生產數量加總,sum(報廢數量ee) as 報廢數量加總
// from yourTable
// where 單別aa='123' and 單號bb='456'
// group by 單別aa,單號bb