"use strict";
seajs.use(["react", 'react-dom','react-plu','jquery'], function (React, ReactDOM, Plus,$) {

    let ArticleTitle =Plus.ArticleTitle;
    let PageHead = Plus.PageHead;
    ReactDOM.render(
        <PageHead/>,
        $("#header-box")[0]
    );
    ReactDOM.render(
        <ArticleTitle/>,
        $("#page-banner")[0]
    );
    let target = document.querySelector('.page-banner');

    document.addEventListener('scroll', function () {
        let pageY = document.body.scrollTop || document.documentElement.scrollTop;
        if(pageY>540){return;}
        let offset = pageY / 2;
        target.style.backgroundPosition = "center " + offset + "px";
    });
});