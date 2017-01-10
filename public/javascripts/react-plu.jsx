"use strict";

define(function (require, exports, module) {
    let React = require('react');
    let ReactDOM = require('react-dom');
    let $ = require('jquery');
    let P = {};
    Date.prototype.format = function (fmt) { //author: meizz
        var o = {
            "M+": this.getMonth() + 1, //月份
            "d+": this.getDate(), //日
            "h+": this.getHours(), //小时
            "m+": this.getMinutes(), //分
            "s+": this.getSeconds(), //秒
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度
            "S": this.getMilliseconds() //毫秒
        };
        if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
        for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        return fmt;
    };

    P.MenuBtn = React.createClass({
        getInitialState: function () {
            return {
                display: false
            };
        },
        handleClick: function (e) {
            this.setState({
                display: !this.state.display
            });
        },
        render: function () {
            let display = this.state.display ? "block" : "none";
            let height = document.body.clientHeight + "px";
            return (
                <div>
                    <button className="btn btn-menu" onClick={this.handleClick}></button>
                    <div className="drop-ul" ref="dropUl" style={{display: display}}>
                        <ul>
                            {
                                this.props.list.map(function (item) {
                                    return <li key={item.title}><a href={item.link} target="_blank">{item.title}</a>
                                    </li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="btn-bg" style={{height: height, display: display}} ref="btnBg"
                         onClick={this.handleClick}></div>
                </div>
            );
        }
    });

    let MenuBtn = P.MenuBtn;

    P.PageHead = React.createClass({
        getDefaultProps: function () {
            let routes = {
                list: [
                    {title: "首页", link: "/index"},
                    {title: "JavaScript", link: "/index"},
                    {title: "Git相关", link: "/index"},
                    {title: "随笔", link: "#"},
                    {title: "GitHub", link: "https://github.com/SinanJS/sinan-blog", phoneOnly: true}
                ]
            };
            return routes;
        },
        render: function () {
            return (
                <div className="page-head">
                    <div className="content-box head-box for-pc">
                        <div className="head-left">
                            <div className="head-img" style={{marginRight: "35px"}}>
                                <img src="/images/logo.png" alt="logo here" className="logo-img"/>
                            </div>
                            {
                                this.props.list.map(function (item) {
                                    if (!item.phoneOnly) {
                                        return <div key={item.title} className="head-item"><a href={item.link}
                                                                                              target="_target"
                                                                                              className="link-item">{item.title}</a>
                                        </div>
                                    }
                                })
                            }
                        </div>
                        <div className="head-right">
                            <div className="head-item">
                                <a href="https://github.com/SinanJS/sinan-blog" target="_blank" className="link-item">GitHub</a>
                            </div>
                        </div>
                    </div>
                    <div className="content-box head-box for-phone">
                        <div className="head-left">
                            <div className="head-img">
                                <img src="/images/logo.png" alt="logo here" className="logo-img"/>
                            </div>
                        </div>
                        <div className="head-right">
                            <div id="btn-menubox" className="head-item">
                                <MenuBtn list={this.props.list}/>
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });

    P.ArticleTitle = React.createClass({

        componentDidMount: function () {
            $.ajax({
                url: "/api/articleInfo",
                data: {
                    id: location.pathname.split("/")[2]
                },
                dataType: "json",
                success: function (result) {
                    this.setState({
                        article: result.data,
                    });
                }.bind(this)
            });
        },
        getInitialState: function () {
            return {
                article: {
                    createTime: new Date().getTime(),
                    tags: []
                }
            }
        },
        getDefaultProps: function () {
            return {
                bgImg: "../images/banner-4.jpg",
            }
        },
        render: function () {
            let dateFormat = "";
            let display = "none";
            let _article = this.state.article;
            if (+_article.createTime) {
                dateFormat = new Date(+_article.createTime).format("yyyy年MM月dd日");
            } else {
                console.warn("日期格式错误：", _article.createTime);
            }
            if (!!_article.subTitle) {
                display = "block";
            }
            return (
                <section className="page-banner" style={{backgroundImage: 'url(' + this.props.bgImg + ')'}}>
                    <div className="title-box">
                        <p className="banner-title">{_article.fileName}</p>
                        <p className="banner-subtxt f-w" style={{display: display}}>
                            <span>{_article.subTitle}</span>
                        </p>
                        <p className="tag-row">
                            {
                                _article.tags.map(function (item) {
                                    return <span key={item} className="small-tag">{item}</span>
                                })
                            }
                            <span className="author-tag">{_article.author}</span>
                            <span className="time-tag">发表于{dateFormat}</span>
                        </p>
                    </div>
                </section>
            );
        }
    });

    P.PageFoot = React.createClass({
        render: function () {
            return (
                <div className="foot-box content-box">
                    <div className="flex-box">
                        <div className="foot-logo">
                            <img src="/images/logo-fff.png" alt=""/>
                            <p>
                                除特别说明外，本站内容均采用
                                <a href="https://creativecommons.org/licenses/by-nd/3.0/cn/deed.zh" target="_blank">
                                    知识共享"署名-禁止演绎 3.0 中国大陆"许可协议</a> 授权
                            </p>
                        </div>
                        <div className="placeholder"></div>
                        <div className="foot-about">
                            <div className="about-gp">
                                <div className="about-title">
                                    联系作者
                                </div>
                                <ul>
                                    <li>
                                        <img src="/images/icon/wechat.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/images/icon/weibo.png" alt=""/>
                                    </li>
                                    <li>
                                        <img src="/images/icon/github.png" alt=""/>
                                    </li>
                                </ul>
                            </div>
                            <div className="about-gp">
                                <div className="about-title">
                                    关于本站
                                </div>
                                <a href=""><img className="aliyun" src="/images/aliyun.png" alt=""/></a>
                            </div>
                        </div>
                    </div>
                    <p className="logo-fff">
                        <img src="/images/logo-fff.png" alt=""/>
                    </p>
                    <p className="cpr">
                        Copyright © 2016-{new Date().getFullYear()} TitanBlog
                    </p>
                    <p style={{textAlign: "center"}} className="ICP">
                        鲁ICP备11008151号
                    </p>
                </div>
            );
        }
    });

    P.ArticleList = React.createClass({
        componentDidMount: function () {
            $.ajax({
                url: "/api/articles/list",
                dataType: "json",
                success: function (result) {
                    if (result.success === 1) {
                        this.setState({articles: result.data.list});
                    }
                }.bind(this)
            });
        },
        getInitialState: function () {
            return {
                articles: []
            }
        },
        render: function () {
            return (
                <div className="index-body">
                    <div className="article-list">
                        {
                            this.state.articles.map(function (item) {
                                let href = "/blog/" + item.key;
                                let imageShow = "none";
                                if (!!item.image) {
                                    imageShow = "block";
                                }
                                return <div className="list-item" key={item.key}>
                                    <div className="article-title">
                                        <a href={href} target="_blank" className="article-a">
                                            {item.fileName}
                                        </a>
                                    </div>
                                    <div className="article-gist">
                                        <img src={item.image} style={{display: imageShow}}/>
                                        {item.gist}…
                                    </div>
                                    <p className="tag-row">
                                        <span className="small-tag">{item.author}</span>
                                        <span className="small-tag"
                                              style={{background: "#fff"}}>发表于：{new Date(item.createTime).format("yyyy年MM月dd日")}</span>
                                    </p>
                                </div>
                            })
                        }
                    </div>
                    <div className="bd-other"></div>
                </div>
            );
        }
    });
    module.exports = P;
});
