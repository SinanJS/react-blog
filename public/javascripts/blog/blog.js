"use strict";

seajs.use(["react", 'react-dom', 'react-plu', 'jquery'], function (React, ReactDOM, Plus, $) {

    var ArticleTitle = Plus.ArticleTitle;
    var PageHead = Plus.PageHead;
    ReactDOM.render(React.createElement(PageHead, null), $("#header-box")[0]);
    ReactDOM.render(React.createElement(ArticleTitle, { title: "\u6B22\u8FCE\u4F7F\u7528\u9A6C\u514B\u98DE\u8C61", subTitle: "\u4E13\u4E3A\u5370\u8C61\u7B14\u8BB0\u6253\u9020\u7684Markdown\u7F16\u8F91\u5668", date: "1482991078224" }), $("#page-banner")[0]);
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