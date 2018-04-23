/**
 * Created by 94802 on 2017/5/30.
 */
var getClient=require('./../util/DBHelper');
var domain=require('domain');
var askAndAnswerSql=require('./sql/askAndAnswerSql');
var dom01=domain.create();

var askAndAnswerDao = {
    // 获得所有问题
    getAll:function (callback) {
        //若抛出异常执行的方法
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        //
        dom01.run(function () {
            getClient(function (client) {
                client.query(askAndAnswerSql.getAll,function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }else{
                        callback(result); 
                    }
                });

            })
        })
    },
    //获得所有未回答问题
    getAllWait:function (callback) {
        //若抛出异常执行的方法
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        //
        dom01.run(function () {
            getClient(function (client) {
                client.query(askAndAnswerSql.getAllWait,function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }else{
                        callback(result);
                    }
                });

            })
        })
    },
    //获得回答问题的排名
    getAnswerCount:function (callback) {
        //若抛出异常执行的方法
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        //
        dom01.run(function () {
            getClient(function (client) {
                client.query(askAndAnswerSql.getAnswerCount,function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }else{
                        callback(result);
                    }
                });

            })
        })
    },
    //获得所有的地点
    getAllPlaces:function (callback) {
        //若抛出异常执行的方法
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        //
        dom01.run(function () {
            getClient(function (client) {
                client.query(askAndAnswerSql.getAllPlaces,function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }else{
                        callback(result);
                    }
                });

            })
        })
    },
    //插入问题
    insertQus:function (uId,content,id,callback) {
        //若抛出异常执行的方法
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        //
        dom01.run(function () {
            getClient(function (client) {
                client.query(askAndAnswerSql.insertQus,[uId,content,id],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }else{
                        callback(result);
                    }
                });

            })
        })
    },
    //问题的模糊查询
    vagueSerach:function (content,callback) {
        //若抛出异常执行的方法
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });

        dom01.run(function() {
            getClient(function (client) {
                client.query('SELECT qid,userName,answerUserId,qContent,tPlaces,from_unixtime(unix_timestamp(qTime),"%Y-%m-%d %h:%m") as qTime,qStatus,photo,replyNum from getall where qContent LIKE "%'+content+'%"',function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }else{
                        callback(result);
                    }
                });
        })
    })
 },
   //获得回答了的问题
    getAllReplyed:function (qid,callback) {
        //若抛出异常执行的方法
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });
        //
        dom01.run(function() {
            getClient(function (client) {
                client.query(askAndAnswerSql.getAllReplyed,[qid],function (error,result) {
                    if(error){
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }else{
                        callback(result);
                    }
                });
            })
        })
    },

    //获得关于地名的所有信息
    getAllByQtypeId:function (cityId,callback) {
        //若抛出异常执行的方法
        dom01.on('error',function (err) {
            console.log(err.message);
            callback(3);
        });

        dom01.run(function() {
            getClient(function (client) {
                client.query(askAndAnswerSql.getAllByQtypeId,[cityId],function (error,result) {
                    if(error){
                        console.log('zzz');
                        client.release();
                        //3  表示数据库连接异常
                        callback(3);
                    }else{
                        console.log('here');
                        callback(result);
                    }
                });
            })
        })
        
    }
    
}

module.exports = askAndAnswerDao;