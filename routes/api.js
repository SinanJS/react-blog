var express = require('express');
var router = express.Router();
var http = require('http');
var fs = require("fs");
var getConfig = require('../path_config');

var getQuery = function (urls) {
    try {
        if (urls) {
            url = urls.split('&');
            var len = url.length;
            var result = {};
            for (var i = 0; i < len; i++) {
                var t = url[i].split('=');
                result[t[0]] = t[1];
            }
            return result;
        }
    } catch (error) {
        console.log(error.message);
    }
};
var setSuccessJSON = function (data) {
    return {
        success: 1,
        error: null,
        data: data ? data : {}
    }
};
var setErrorJSON = function (code, info) {
    var ls = {
        "E01": "缺少参数.",
        "E02": "没有找到相关资源.",
    };
    return {
        success: 1,
        error: {
            code: code,
            msg: ls[code] + info
        },
        data: null
    }
};
router.get('/articleInfo', function (req, res, next) {
    var query = req._parsedUrl.query ? getQuery(req._parsedUrl.query) : (function () {
            res.send(setErrorJSON("E01", "id"));
            return false;
        })();
    if (!query || !query.id) {
        return;
    }
    getConfig(function (pc) {
        res.send(setSuccessJSON(pc[query.id]));
        pc = null;
    });
});
router.get('/articles/list',function (req,res,next) {
    getConfig(function (pc) {
        var arr = [];
        for(var item in pc){
            arr.push(pc[item]);
        }
        res.send(setSuccessJSON({
            list:arr
        }));
    });
    pc = null;
});
module.exports = router;
