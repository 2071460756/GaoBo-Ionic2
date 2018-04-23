/**
 * Created by 94802 on 2017/5/30.
 */
var express = require('express');
var router = express.Router();
var askAndAnswerDao = require('../dao/askAndAnswerDao');

var formidable = require('formidable');
var createUnique = require('../util/createUnique');
var fs = require('fs');

router.get('/getAll', function(req, res, next) {
    //通过get方式获取提交到的信息
    askAndAnswerDao.getAll(function (response) {
        //console.log(response);
        res.json(response);
    })
});

router.get('/getAllWait', function(req, res, next) {
    //通过get方式获取提交到的信息
    askAndAnswerDao.getAllWait(function (response) {
        res.json(response);
    })
});

router.get('/getAnswerCount', function(req, res, next) {
    //通过get方式获取提交到的信息
    askAndAnswerDao.getAnswerCount(function (response) {
        res.json(response);
    })
});

router.get('/getAllPlaces', function(req, res, next) {
    //通过get方式获取提交到的信息
    askAndAnswerDao.getAllPlaces(function (response) {
        console.log(response);
        res.json(response);
    })
});

router.get('/insertQus', function(req, res, next) {
    //通过get方式获取提交到的信息
    var getContent = req.query;
    console.log(getContent.uId);
        askAndAnswerDao.insertQus(getContent.uId,getContent.content,getContent.id,function (response) {
                 res.json({affectedRows:response.affectedRows});
        })
});

router.get('/vagueSerach', function(req, res, next) {
    //通过get方式获取提交到的信息
    var getContent = req.query;
    console.log(getContent.content);
    askAndAnswerDao.vagueSerach(getContent.content,function (response) {
        res.json(response);
    })
});

router.get('/getAllReplyed', function(req, res, next) {
    //通过get方式获取提交到的信息
    console.log('here');
    var getContent = req.query;
    askAndAnswerDao.getAllReplyed(getContent.qid,function (response) {
        res.json(response);
    })
});

router.get('/getAllByQtypeId', function(req, res, next) {
    //通过get方式获取提交到的信息
    var cityId = req.query.cityId;
    // console.log(cityId);
    askAndAnswerDao.getAllByQtypeId(cityId,function (response) {
        res.json(response);
    })
});

router.post('/getIcons', function(req, res, next) {
    var tupian = [];
    var form = new formidable.IncomingForm();
    form.parse(req, function (err, fields, files) {

        if (err) {
            response.locals.error = err;
            // response.render("uploads");
            return;
        }
        // console.log(files)
        for(var i in files){
            // console.log(files[i].type);
            // console.log(files[i].path);
            var extName = '';  //后缀名
            // console.log('文件后缀名为 ' + files.file.type);
            switch (files[i].type) {  //此处in_file  为页面端 <input type=file name=in_file>
                case 'image/jpeg':
                    extName = 'jpeg';
                    break;
                case 'image/jpg':
                    extName = 'jpg';
                    break;
                case 'image/png':
                    extName = 'png';
                    break;
                case 'image/x-png':
                    extName = 'png';
                    break;
            }
            // console.log('extName=' + extName)
            if (extName.length == 0) {
                res.send('只支持png和jpg格式图片');
                return;
            } else {
                form.uploadDir = "../public/images/demo/" ;     //设置上传目录
                form.keepExtensions = true;     //保留后缀
                form.maxFieldsSize = 2 * 1024;   //文件大小

                var avatarName = createUnique.creatName() + '.' + extName;
                var newPath = form.uploadDir + avatarName;
                tupian.push(avatarName);
                console.log(avatarName);
                // fs.renameSync(files.file.path).pipe(newPath);

                // fs.renameSync(files.file.path, newPath);  //重命名

                //      fs.renameSync(files.upload.path, "./tmp/test.jpg");
                var readStream = fs.createReadStream(files[i].path);
                var writeStream = fs.createWriteStream(newPath);
                readStream.pipe(writeStream);
                readStream.on('end', function () {
                    fs.unlink(files[i].path);
                });

            }
        }
        // console.log(fields)

        // console.log(fields.user_phone_number.length);
        // console.log(files);



console.log(tupian)

    })
});

module.exports = router;