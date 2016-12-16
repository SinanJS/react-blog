"use strict";

seajs.use(["react", 'react-dom', 'react-plu', 'selector'], function (React, ReactDOM, Plus, $) {
    console.log($('.page-body'));
    ReactDOM.render(React.createElement(
        "h1",
        null,
        "Hello, world"
    ), $('.page-body')[0]);
    var MenuBtn = Plus.MenuBtn;

    ReactDOM.render(React.createElement(MenuBtn, null), $("#btn-menubox")[0]);
    var target = document.querySelector('.banner-box');

    document.addEventListener('scroll', function () {
        var pageY = document.body.scrollTop || document.documentElement.scrollTop;
        var offset = pageY / 3;
        target.style.backgroundPosition = "center " + offset + "px";
    });
});