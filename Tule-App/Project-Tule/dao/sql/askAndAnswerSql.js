/**
 * Created by 94802 on 2017/5/30.
 */
var askAndAnswerSql = {
    getAll: 'SELECT qid,userName,answerUserId,qContent,tPlaces,from_unixtime(unix_timestamp(qTime),"%Y-%m-%d %h:%m") as qTime,qStatus,photo,replyNum,qTypeId from getall',
    getAllWait:'SELECT qid,answerUserId,qContent,tPlaces,qTypeId,from_unixtime(unix_timestamp(qTime),"%Y-%m-%d %h:%m") as qTime,qStatus,photo from getallwait',
    getAnswerCount:'SELECT userName,photo,replyerId,COUNT(replyerId) as replyCount from questions_reply inner JOIN user_info on replyerId=userId GROUP BY replyerId ORDER BY replyCount DESC',
    getAllPlaces:'SELECT * from questions_type ORDER BY tId ASC',
    insertQus:'insert into questions (answerUserId,qContent,qTypeId,qTime) VALUES (?,?,?,NOW())',
    vagueSerach:'SELECT qid,answerUserId,qContent,tPlaces,from_unixtime(unix_timestamp(qTime),"%Y-%m-%d %h:%m") as qTime,qStatus,photo,replyNum from getall where qContent LIKE "%?%"',
    getAllReplyed:'SELECT replyId,fatherQuestionId,questionerId,replyerId,replyContent,from_unixtime(unix_timestamp(replyDate),"%Y-%m-%d %h:%m") as replyDate,userId,userName,photo from getallreplyed where fatherQuestionId = ?',
    getAllByQtypeId:'SELECT * from getall WHERE qTypeId = ? ORDER BY qTime DESC'
}
module.exports = askAndAnswerSql;