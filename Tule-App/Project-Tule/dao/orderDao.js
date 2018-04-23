/**
 * Created by wang on 2017/5/6.
 */
var getClient=require('./../util/DBHelper');
var domain=require('domain');
var showRentCarSql=require('./sql/showRentCarSql');

// var util=require('./../util/MD5');

var dom01=domain.create();
var order={
    getRealUser:function (uId,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query('select relName,IDNumber FROM rel_user_info where userId = ?',[uId],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                    callback(result);


                });

            })
        })
    },
    insertOrder:function (order1,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {
                // console.log(order1)
                client.query('INSERT into car_order(carId,userId,rentTime,returnTime,rentStore,returnStore,noNeedpayId,orderStatusId,commentStatus,orderTime)VALUES(?,?,?,?,?,?,?,?,?,NOW())', [order1.carId,order1.uId,order1.rentDate,order1.backDate,order1.rentStorm,order1.returnStorm,order1.noNeedPay,order1.orderStatus,order1.commStatus],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                    // console.log(result)
                    callback(result);
                });

            })
        })
    },
    getCarInfo:function (carId,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query('SELECT * from allcar where carId= ?',[carId],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                    callback(result);
                });

            })
        })
    },
    getStoreId:function (name,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query('SELECT id  from car_store where store= ?',[name],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                    callback(result);
                });

            })
        })
    },
    getDetailOrderByoId:function (oId,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query('SELECT * from order_view02 where oId =?',[oId],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                    callback(result);
                });

            })
        })
    },
    updateOrder:function (orderStatus,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query('update car_order set orderStatusId = ? WHERE userId= ? order by oId desc limit 1 ',[orderStatus.orderStatus,orderStatus.uId],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                    callback(result);
                });

            })
        })
    },
    updateOrderByOid:function (orderStatus,callback) {
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        dom01.run(function () {
            getClient(function (client) {
                client.query('update car_order set orderStatusId = ? WHERE oId= ? ',[orderStatus.orderStatus,orderStatus.oId],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }
                    callback(result);
                });

            })
        })
    },
};
module.exports=order;