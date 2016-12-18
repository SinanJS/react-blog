var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require("fs");
var pc = require('../path_config');
var Hyper = require("../HyperDown");
/* GET users listing. */
var md2Html = new Hyper();

router.get('/', function(req, res, next) {
    console.log(req);
    res.render('blog/index', { title: 'blog' });
});
router.get('/**', function(req, res, next) {
    var pathName = req._parsedUrl.pathname.split("/")[1];
    var file = pc[pathName];
    if(!file){
        res.render("error/not-found");
        return;
    }
    fs.readFile(file.path, function(err, contents) {
        if(err){
            console.log("error",err);
            return;
        }
        //res.write(contents);
        file.contents = contents;
        file.html = md2Html.makeHtml(contents.toString());
        res.render('blog/index',file);
    });
});
module.exports = router;
