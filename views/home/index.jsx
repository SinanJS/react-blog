"use strict";
seajs.use(["react", 'react-dom', 'react-plu', 'selector'], function (React, ReactDOM, Plus, $) {
    ReactDOM.render(
        <Plus.PageFoot/>,
        $(".page-foot")[0]
    );
    ReactDOM.render(
        <Plus.PageHead/>,
        document.getElementById("header-box")
    );

    ReactDOM.render(
        <Plus.ArticleList/>,
        $(".page-body")[0]
    );
    alert(window.body.clientWidth);
    let target = document.querySelector('.page-banner');
    document.addEventListener('scroll', function () {
        let pageY = document.body.scrollTop || document.documentElement.scrollTop;
        if (pageY > 540) {
            return;
        }
        let offset = pageY / 3;
        target.style.backgroundPosition = "center " + offset + "px";
    });
});