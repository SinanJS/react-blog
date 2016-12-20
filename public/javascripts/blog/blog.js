"use strict";

seajs.use(["react", 'react-dom', 'react-plu', 'selector'], function (React, ReactDOM, Plus, $) {

    var MenuBtn = Plus.MenuBtn;
    var PageHead = Plus.PageHead;
    ReactDOM.render(React.createElement(PageHead, null), $("#header-box")[0]);
    var target = document.querySelector('.banner-box');

    document.addEventListener('scroll', function () {
        var pageY = document.body.scrollTop || document.documentElement.scrollTop;
        if (pageY > 540) {
            return;
        }
        var offset = pageY / 3;
        target.style.backgroundPosition = "center " + offset + "px";
    });
});