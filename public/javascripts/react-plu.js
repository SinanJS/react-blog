"use strict";

define(function (require, exports, module) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var $ = require('jquery');
    var P = {};
    Date.prototype.format = function (fmt) {
        //author: meizz
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
        for (var k in o) {
            if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
        }return fmt;
    };
    P.MenuBtn = React.createClass({
        displayName: 'MenuBtn',

        getInitialState: function getInitialState() {
            return {
                display: false
            };
        },
        handleClick: function handleClick(e) {
            this.setState({
                display: !this.state.display
            });
        },
        render: function render() {
            var display = this.state.display ? "block" : "none";
            var height = document.body.clientHeight + "px";
            return React.createElement(
                'div',
                null,
                React.createElement('button', { className: 'btn btn-menu', onClick: this.handleClick }),
                React.createElement(
                    'div',
                    { className: 'drop-ul', ref: 'dropUl', style: { display: display } },
                    React.createElement(
                        'ul',
                        null,
                        this.props.list.map(function (item) {
                            return React.createElement(
                                'li',
                                { key: item.title },
                                React.createElement(
                                    'a',
                                    { href: item.link, target: '_blank' },
                                    item.title
                                )
                            );
                        })
                    )
                ),
                React.createElement('div', { className: 'btn-bg', style: { height: height, display: display }, ref: 'btnBg',
                    onClick: this.handleClick })
            );
        }
    });
    var MenuBtn = P.MenuBtn;
    P.PageHead = React.createClass({
        displayName: 'PageHead',

        getDefaultProps: function getDefaultProps() {
            var routes = {
                list: [{ title: "首页", link: "/index" }, { title: "博客", link: "/blog" }, { title: "随笔", link: "#" }, { title: "相册", link: "#" }, { title: "GitHub", link: "https://github.com/SinanJS/sinan-blog", phoneOnly: true }]
            };
            return routes;
        },
        render: function render() {
            return React.createElement(
                'div',
                { className: 'page-head' },
                React.createElement(
                    'div',
                    { className: 'content-box head-box for-pc' },
                    React.createElement(
                        'div',
                        { className: 'head-left' },
                        React.createElement(
                            'div',
                            { className: 'head-img', style: { marginRight: "35px" } },
                            React.createElement('img', { src: '/images/logo.png', alt: 'logo here', className: 'logo-img' })
                        ),
                        this.props.list.map(function (item) {
                            if (!item.phoneOnly) {
                                return React.createElement(
                                    'div',
                                    { key: item.title, className: 'head-item' },
                                    React.createElement(
                                        'a',
                                        { href: item.link,
                                            target: '_target',
                                            className: 'link-item' },
                                        item.title
                                    )
                                );
                            }
                        })
                    ),
                    React.createElement(
                        'div',
                        { className: 'head-right' },
                        React.createElement(
                            'div',
                            { className: 'head-item' },
                            React.createElement(
                                'a',
                                { href: 'https://github.com/SinanJS/sinan-blog', target: '_blank', className: 'link-item' },
                                'GitHub'
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'content-box head-box for-phone' },
                    React.createElement(
                        'div',
                        { className: 'head-left' },
                        React.createElement(
                            'div',
                            { className: 'head-img' },
                            React.createElement('img', { src: '/images/logo.png', alt: 'logo here', className: 'logo-img' })
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'head-right' },
                        React.createElement(
                            'div',
                            { id: 'btn-menubox', className: 'head-item' },
                            React.createElement(MenuBtn, { list: this.props.list })
                        )
                    )
                )
            );
        }
    });
    P.ArticleTitle = React.createClass({
        displayName: 'ArticleTitle',


        componentDidMount: function componentDidMount() {
            $.ajax({
                url: "/api/articleInfo",
                data: {
                    id: location.pathname.split("/")[2]
                },
                dataType: "json",
                success: function (result) {
                    this.setState({
                        article: result.data
                    });
                }.bind(this)
            });
        },
        getInitialState: function getInitialState() {
            return {
                article: {
                    createTime: new Date().getTime(),
                    tags: []
                }
            };
        },
        getDefaultProps: function getDefaultProps() {
            return {
                bgImg: "../images/banner-4.jpg"
            };
        },
        render: function render() {
            var dateFormat = "";
            var display = "none";
            var _article = this.state.article;
            if (+_article.createTime) {
                dateFormat = new Date(+_article.createTime).format("yyyy年MM月dd日");
            } else {
                console.warn("日期格式错误：", _article.createTime);
            }
            if (!!_article.subTitle) {
                display = "block";
            }
            return React.createElement(
                'section',
                { className: 'page-banner', style: { backgroundImage: 'url(' + this.props.bgImg + ')' } },
                React.createElement(
                    'div',
                    { className: 'title-box' },
                    React.createElement(
                        'p',
                        { className: 'banner-title' },
                        _article.fileName
                    ),
                    React.createElement(
                        'p',
                        { className: 'banner-subtxt f-w', style: { display: display } },
                        React.createElement(
                            'span',
                            null,
                            _article.subTitle
                        )
                    ),
                    React.createElement(
                        'p',
                        { className: 'tag-row' },
                        _article.tags.map(function (item) {
                            return React.createElement(
                                'span',
                                { key: item, className: 'small-tag' },
                                item
                            );
                        }),
                        React.createElement(
                            'span',
                            { className: 'author-tag' },
                            _article.author
                        ),
                        React.createElement(
                            'span',
                            { className: 'time-tag' },
                            '\u53D1\u8868\u4E8E',
                            dateFormat
                        )
                    )
                )
            );
        }
    });
    module.exports = P;
});