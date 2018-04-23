/**
 * Created by 94802 on 2017/5/2.
 */
var personalSql={

    // getMyInfoByPhoneNum:'SELECT user.uId,nickName,relName,idCardNum,phoneNum,email,userPhoto,jifen from user,person_info WHERE user.uId = person_info.uId and phoneNum=?',
    upDateMyInfoByUid:"UPDATE user_info,rel_user_info SET userName=?,email=? where user_info.userId = rel_user_info.userId and user_info.userId = ?",
    // getCollectByUid:"select uId,eachCarId,collector.carId,from_unixtime(unix_timestamp(collTime),'%Y-%m-%d %h:%m') as collTime,carName,rentPrice,carPhoto,carSize,sitNum,doorNum,gearBoxType,output from collector,car_info,car_config_info WHERE collector.carId=car_info.carId=car_config_info.carId and uId = ?",
    // deleteByCarIdAndUid:"DELETE from collector WHERE uId = ? and carId = ? and eachCarId = ?",
    // upDatePasswordByUid:"UPDATE user set password=? where uId = ? and password=?",
    // getPerOrder:'SELECT a.*,b.carId from newGetOrder as a,detail_car as b WHERE a.eachCarId=b.eachCarId AND a.uId = ? order by orderTime DESC',
    // insertIntoComByUidAndOid:'insert INTO comments (uId,orderId,grade,comContent,comTime) VALUES (?,?,?,?,NOW())',
    // getComByUid:'SELECT a.id,a.uId,b.eachCarId,b.carId,a.orderId,a.grade,a.comContent,from_unixtime(unix_timestamp(a.comTime),"%Y-%m-%d %h:%m") as collTime,c.carName,c.carSize,d.output,d.sitNum from comments as a INNER JOIN car_order as e on e.oId=a.orderId INNER JOIN detail_car as b on e.eachCarId=b.eachCarId INNER JOIN car_info as c on b.carId=c.carId INNER JOIN car_config_info as d on c.carId=d.carId WHERE a.uId=? order By collTime asc',
    // getInfoByOid:'SELECT a.*,b.relName from newGetOrder a,person_info as b WHERE a.uId = b.uId and a.oId =?',
    cancelOrderByOid:'UPDATE car_order SET orderStatus = 6 WHERE oId = ?',
    // updateOrdStaByOid:'update car_order set commStatus = 1 WHERE oId = ?',

    //修改过后的sql语句
    getPerOrder: 'select * from order_view02 where userId = ?',
    getInfoByOid:'SELECT a.*,b.relName from order_view02 AS a,rel_user_info as b WHERE a.userId = b.userId and a.oId = ?',
    getMyInfoByPhoneNum:'SELECT a.userId,a.userName,a.userPhone,a.userStatusId,a.photo,b.relName,b.IDNumber,email,verifyStatusId from user_info as a,rel_user_info as b WHERE a.userId = b.userId and a.userPhone = ? ',
    updatePersonInfo:"update user_info u1,rel_user_info p1 set u1.userName= ?,u1.userPhone= ?,p1.relName = ?,p1.IDNumber= ?,p1.email= ?,p1.verifyStatusId =1 WHERE u1.userId = p1.userId and u1.userId=?",
    upDatePasswordByUid:"UPDATE user_info set password=? where userId = ? and password=?",
    getComByUid:'select * from getcom where userId = ?',
    getCollectByUid:'select * from getcol where userId  = ?',
    deleteByCarIdAndUid:"DELETE from collector WHERE userId = ? and carId = ?",
    insertIntoComByUidAndOid:'insert INTO comments (userId,orderId,grade,comContent,comTime) VALUES (?,?,?,?,NOW())',
    updateOrdStaByOid:'update car_order set commentStatus = 1 WHERE oId = ?',


};
module.exports = personalSql;