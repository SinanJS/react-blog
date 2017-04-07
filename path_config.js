var fs = require("fs");

var getConfig = function (cb) {
    var pathConfig = {};
    fs.readFile('db/path_config.json', function (err, contents) {
        if (err) {
            console.log("error", err);
            return;
        }
        pathConfig = JSON.parse(contents.toString());
        cb(pathConfig);
        pathConfig = null;
    });
};
module.exports = getConfig;