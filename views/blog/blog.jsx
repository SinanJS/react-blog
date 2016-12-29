"use strict";
seajs.use(["react", 'react-dom','react-plu','jquery'], function (React, ReactDOM, Plus,$) {

    let ArticleTitle =Plus.ArticleTitle;
    let PageHead = Plus.PageHead;
    ReactDOM.render(
        <PageHead/>,
        $("#header-box")[0]
    );
    ReactDOM.render(
        <ArticleTitle title="欢迎使用马克飞象" subTitle="专为印象笔记打造的Markdown编辑器" date="1482991078224"/>,
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