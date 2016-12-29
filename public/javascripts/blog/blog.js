"use strict";

seajs.use(["react", 'react-dom', 'react-plu', 'jquery'], function (React, ReactDOM, Plus, $) {

    var ArticleTitle = Plus.ArticleTitle;
    var PageHead = Plus.PageHead;
    ReactDOM.render(React.createElement(PageHead, null), $("#header-box")[0]);
    ReactDOM.render(React.createElement(ArticleTitle, null), $("#page-banner")[0]);
    var target = document.querySelector('.page-banner');

    document.addEventListener('scroll', function () {
        var pageY = document.body.scrollTop || document.documentElement.scrollTop;
        if (pageY > 540) {
            return;
        }
        var offset = pageY / 2;
        target.style.backgroundPosition = "center " + offset + "px";
    });
});