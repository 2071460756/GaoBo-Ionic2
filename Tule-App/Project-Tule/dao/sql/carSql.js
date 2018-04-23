/**
 * Created by dell on 2017/4/27.
 */
var carSql= {
    //首页展示车信息
    getIndexCarInfo: 'select DISTINCT(carId),brandName,seriesName,rentPrice,picture from allcar',
    //详情页面
    getDetailCarInfo: 'SELECT * from detailCarInfo WHERE carId=?',

    //得到门店
  /*  getCarStore:'select id,store,cId from car_store where cId=?',
    getCarCity:'SELECT cId, city from city_type ;',*/
    getCarStore:'select * from car_store where cityId=?',
    getCarCity:'select * from city ;',

    //车辆详情页面展示评价
    // getCarCommById:'SELECT b.nickName,c.userPhoto,a.comContent,a.grade,from_unixtime(unix_timestamp(a.comTime),"%Y-%m-%d %h:%m") as comTime,from_unixtime(unix_timestamp(d.rentTime),"%Y-%m-%d") as rentTime,f.store,e.carId FROM comments as a INNER JOIN user as b on b.uId=a.uId INNER JOIN person_info as c on c.uId=b.uId INNER JOIN car_order as d on d.oId=a.orderId INNER JOIN detail_car as e on d.eachCarId=e.eachCarId INNER JOIN car_store as f on f.id=e.store where carId=?',
    getCarCommById:'SELECT b.userName,b.photo,a.comContent,a.grade,from_unixtime(unix_timestamp(a.comTime),"%Y-%m-%d %h:%m") as comTime,from_unixtime(unix_timestamp(c.rentTime),"%Y-%m-%d") as rentTime,c.rentStore,c.carId FROM comments as a INNER JOIN user_info as b on b.userId=a.userId INNER JOIN car_order as c on c.oId=a.orderId where carId=?',
    getCommGradeByCarId:'select sum(grade) as carGrade  from comments INNER JOIN car_order where comments.orderId = car_order.oId AND car_order.carId=?',

    getTime:'SELECT rentTime, returnTime, orderStatusId,rentStore from car_order where carId=?',
    getcarId:'SELECT carId FROM car_store_cs INNER JOIN car_store WHERE car_store_cs.storeId=car_store.stroeId AND car_store.store=?',
    getCarInfo:'SELECT rentPrice, benefits FROM exhibite INNER JOIN cars_info WHERE exhibite.exhibiteId=cars_info.exhibiteId AND cars_info.carId=?',

    getCounts:'SELECT counts FROM car_store_cs INNER JOIN car_store WHERE car_store_cs.storeId=car_store.stroeId AND car_store.store= ? AND car_store_cs.carId=?',

}
module.exports=carSql;