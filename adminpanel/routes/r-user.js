const express = require('express');
const router = new express.Router();

const {getDashboard,getform,getPostData,checkuserData } = require ("../controllers/c-user")
const body = require('body-parser');
const bodyParser = body.urlencoded({extended: false});

router.get('/admin', getDashboard);
router.get('/admin/form', getform);
router.post('/admin/saveData',bodyParser, getPostData);
router.post('/checklogin',bodyParser,checkuserData);


module.exports=router;