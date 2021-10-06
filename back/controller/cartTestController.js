const cartTestModel = require("../model/cartTestModel");

//17, 12, 6, 5
const userId = 5;

const orderListTest = async (req, res, next) => {
  const userOrder = await cartTestModel.getUserOrder(userId);
  const productType = await cartTestModel.getProductType();

  let productTypeList = new Map();
  productType.forEach((item) => {
    productTypeList.set(item.id, item.name_frontend);
  });

  //   console.log('typeList:' ,productTypeList )

  let orderIdGroup = [];

  userOrder.forEach((order) => {
    orderIdGroup.push(order.id);
  });
  // console.log(orderIdGroup)

  const userOrderDetail = await cartTestModel.getUserOrderDetail(orderIdGroup);

  const orderDetailSkuIdGroup = [];

  userOrderDetail.forEach((orderDetail) => {
    orderDetailSkuIdGroup.push(orderDetail.product_id);
  });

//   console.log('orderDetailSkuIdGroup:',orderDetailSkuIdGroup)

  const productSku = await cartTestModel.getProductSku(orderDetailSkuIdGroup);

  let skuTypeGroupAll = [];
  let productIdGroup = [];

  productSku.map((item) => {
    item.sku_group = item.sku_group.split(",").map(Number);
    skuTypeGroupAll.push(item.sku_group);
    productIdGroup.push(item.product_id);
  });
  skuTypeGroupAll = skuTypeGroupAll.flat();
  skuTypeGroupAll = [...new Set(skuTypeGroupAll)];

  const productTypeValue = await cartTestModel.getProductTypeValue(
    skuTypeGroupAll
  );
  const productList = await cartTestModel.getProductList(productIdGroup);
  let productListMap = new Map();
  productList.forEach((item) => {
    productListMap.set(item.id, item.name);
  });

//   console.log("productList:", productList);
  let newProductTypeValue = [];
  productTypeValue.map((item) => {
    item.type_name = productTypeList.get(item.type_id);
  });

  let productTypeValueMap = new Map();
  productTypeValue.forEach((item) => {
    productTypeValueMap.set(item.id, item);
  });
//   console.log("productTypeValueMap:", productTypeValueMap);

  productSku.map((item) => {
    item.type = [];
    item.sku_group.forEach((skuId) => {
      // console.log('productTypeValueMap.skuId:', productTypeValueMap.get(skuId), 'skuId:', skuId)
      item.type.push(productTypeValueMap.get(skuId));
    });
  });

  userOrderDetail.map((item) => {
    item.sku = productSku.find((sku) => {
      return item.product_id === sku.id;
    });
  });

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
