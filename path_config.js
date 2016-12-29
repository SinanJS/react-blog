var fs = require("fs");
var root = "./public/md/";
var pathConfig = {};

var getConfig = function (cb) {
    var pathConfig = {};
    fs.readFile('./db/path_config.json', function (err, contents) {
        if (err) {
            console.log("error", err);
            return;
        }
        pathConfig = JSON.parse(contents.toString());
        cb(pathConfig);
    });
};
module.exports = getConfig;

