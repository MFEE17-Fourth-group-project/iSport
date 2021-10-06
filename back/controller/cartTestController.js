const cartTestModel = require("../model/cartTestModel");

//17, 12, 6, 5
const userId = 5;

// 資料庫沒有用join，因為不清楚要哪些欄位所以都全撈，資料結構可能有落差，但原理都差不多可以自己改成想要的樣子。

const orderListTest = async (req, res, next) => {
  //依照使用者id找訂單
  const userOrder = await cartTestModel.getUserOrder(userId);

  //商品列表（全撈）
  const productType = await cartTestModel.getProductType();

  //---------------------------------------------------------------------------

  //把productType用Map的資料結構呈現（key, value）大概類似字典的東西
  let productTypeList = new Map();
  productType.forEach((item) => {
    productTypeList.set(item.id, item.name_frontend);
  });

  //----------------------------------------------------------------------------
  //取得所有orderId

  let orderIdGroup = [];

  userOrder.forEach((order) => {
    orderIdGroup.push(order.id);
  });

  //----------------------------------------------------------------------------

  //撈出目標orderId的userOrderDetail
  const userOrderDetail = await cartTestModel.getUserOrderDetail(orderIdGroup);
  const orderDetailSkuIdGroup = [];

  //取得所有DetailSkuId
  userOrderDetail.forEach((orderDetail) => {
    orderDetailSkuIdGroup.push(orderDetail.product_id);
  });

  //----------------------------------------------------------------------------

  //撈出目標DetailSkuId的productSku

  const productSku = await cartTestModel.getProductSku(orderDetailSkuIdGroup);
  let skuTypeGroupAll = [];

  //取得所有skuTypeValueId
  productSku.map((item) => {
    item.sku_group = item.sku_group.split(",").map(Number);
    skuTypeGroupAll.push(item.sku_group);
  });

  //解開陣列
  skuTypeGroupAll = skuTypeGroupAll.flat();
  //去除重複
  skuTypeGroupAll = [...new Set(skuTypeGroupAll)];

  //----------------------------------------------------------------------------

  //照skuTypeValueId取出typeValue清單
  const productTypeValue = await cartTestModel.getProductTypeValue(
    skuTypeGroupAll
  );
  //   const productList = await cartTestModel.getProductList(productIdGroup);

  //改變資料格式
  let productListMap = new Map();
  productList.forEach((item) => {
    productListMap.set(item.id, item.name);
  });

  //以鍵值對方式增加type中文值到productTypeValue
  productTypeValue.map((item) => {
    item.type_name = productTypeList.get(item.type_id);
  });

  //改變資料結構
  let productTypeValueMap = new Map();
  productTypeValue.forEach((item) => {
    productTypeValueMap.set(item.id, item);
  });

  //----------------------------------------------------------------------------

  //增加type的key到productSku,並且給值（type value）
  productSku.map((item) => {
    item.type = [];
    item.sku_group.forEach((skuId) => {
      item.type.push(productTypeValueMap.get(skuId));
    });
  });

  //----------------------------------------------------------------------------

  //找到對應的productSku插回userOrderDetail
  userOrderDetail.map((item) => {
    item.sku = productSku.find((sku) => {
      return item.product_id === sku.id;
    });
  });

  //----------------------------------------------------------------------------
  //找到對應的userOrderDetail插回userOrder

  userOrder.map((item) => {
    let arr = userOrderDetail.filter((orderDetail) => {
      return item.id === orderDetail.order_id;
    });
    // console.log("arr:", arr);
    item.orderDetail = arr;
  });

  res.json(userOrder);
};

module.exports = {
  orderListTest,
};
