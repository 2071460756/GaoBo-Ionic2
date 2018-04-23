/**
 * Created by wang on 2017/5/6.
 */
var express = require('express');
var router = express.Router();
var orderDao = require('./../dao/orderDao')

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});
router.get('/getRealUser', function(req, res, next) {
    orderDao.getRealUser(req.query.uId,function (result) {

        res.json(result[0]);
    })
});
router.get('/insertOrder', function(req, res, next) {
    var order=JSON.parse(req.query.data);
    orderDao.insertOrder(order,function (result) {
        res.json(result.affectedRows);
    })
});


router.get('/getCarInfo', function(req, res, next) {
    var carId=JSON.parse(req.query.carId);
    orderDao.getCarInfo(carId,function (result) {
        res.json(result);
    })
});
router.get('/getStoreId', function(req, res, next) {
    var name=req.query.name;
    orderDao.getStoreId(name,function (result) {
        res.json(result);
    })
});
router.get('/updateOrder', function(req, res, next) {
    var orderStatus=JSON.parse(req.query.orderStatus);
    // console.log(orderStatus.orderStatus)
    orderDao.updateOrder(orderStatus,function (result) {
        res.json(result.affectedRows);
    })
});
router.get('/updateOrderByOid', function(req, res, next) {
    var orderStatus=JSON.parse(req.query.orderStatus);
    // console.log(orderStatus.orderStatus)
    orderDao.updateOrderByOid(orderStatus,function (result) {
        res.json(result.affectedRows);
    })
});
module.exports = router;