"use strict";

seajs.use(["react", 'react-dom', 'react-plu', 'selector'], function (React, ReactDOM, Plus, $) {
    ReactDOM.render(React.createElement(Plus.PageFoot, null), $(".page-foot")[0]);
    ReactDOM.render(React.createElement(Plus.PageHead, null), document.getElementById("header-box"));

    ReactDOM.render(React.createElement(Plus.ArticleList, null), $(".page-body")[0]);
    var target = document.querySelector('.page-banner');
    document.addEventListener('scroll', function () {
        var pageY = document.body.scrollTop || document.documentElement.scrollTop;
        if (pageY > 540) {
            return;
        }
        var offset = pageY / 3;
        target.style.backgroundPosition = "center " + offset + "px";
    });
});