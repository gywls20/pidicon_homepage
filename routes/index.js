var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '가명·익명처리 기술 경진대회' });

});

router.get('/info', function(req, res, next) {
  res.render('info', { title: '가명·익명처리 기술 경진대회 소개' });
});

router.get('/plan', function(req, res, next) {
  res.render('plan', { title: '가명·익명처리 기술 경진대회 일정' });
});

router.get('/apply', function(req, res, next) {
  res.render('apply', { title: '가명·익명처리 기술 경진대회 신청' });
});

router.get('/award', function(req, res, next) {
  res.render('award', { title: '가명·익명처리 기술 경진대회 시상내역' });
});

module.exports = router;
