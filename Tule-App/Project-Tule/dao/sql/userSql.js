/**
 * Created by lzhan on 2017/4/21.
 */
var sql={
    getAllByPhoneNum:'select nickName,phoneNum from user where phoneNum=? AND password = ?',
    /*getUserByPhoneNUm:'select uId from user where phoneNum=?',
    addUser:'insert into user(nickName,phoneNum,password) values(?,?,?)',*/
    //getUserPassword:'select user.uId,password,nickName,userPhoto from user,person_info where user.uId = person_info.uId and phoneNum=?',

    getCollectByUid:"select uId,collector.carId,from_unixtime(unix_timestamp(collTime),'%Y-%m-%d %h:%m') as collTime,carName,rentPrice,carPhoto,carSize,sitNum,doorNum,gearBoxType,output from collector,car_info,car_config_info WHERE collector.carId=car_info.carId=car_config_info.carId and uId = ?",
    deleteByCarIdAndUid:"DELETE from collector WHERE uId = ? and carId = ?",

    //判断收藏表中是否存在
    isExitCollById:'select * from collector where carId=? and userId=? ',
    //插入收藏
    insertCollector:'INSERT into collector(carId,userId,collTime) VALUES (?,?,now())',
    //删除收藏
    deleteCollector:'delete from collector where carId=? and userId=?',


    //-----修改过后的sql语句------
    addUser:'insert into user_info(userName,userPhone,password,registerTime,token) values (?,?,?,NOW(),?)',
    getUserByPhoneNUm:'select userId from user_info where userPhone= ?',
    inserentRelUser:'UPDATE  rel_user_info set relName=?,IDNumber=? ,verifyStatusId=1  WHERE rel_user_info.userId=?; ',
    getUserPassword:'SELECT userPhone,userName,userId,photo,password from user_info WHERE userPhone = ?',
    updateToken:'UPDATE user_info set token = ? WHERE userPhone = ?'


};
module.exports=sql;