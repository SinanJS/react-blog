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

    P.PageFoot = React.createClass({
        displayName: 'PageFoot',

        render: function render() {
            return React.createElement(
                'div',
                { className: 'foot-box content-box' },
                React.createElement(
                    'div',
                    { className: 'flex-box' },
                    React.createElement(
                        'div',
                        { className: 'foot-logo' },
                        React.createElement('img', { src: '/images/logo-fff.png', alt: '' }),
                        React.createElement(
                            'p',
                            null,
                            '\u9664\u7279\u522B\u8BF4\u660E\u5916\uFF0C\u672C\u7AD9\u5185\u5BB9\u5747\u91C7\u7528',
                            React.createElement(
                                'a',
                                { href: 'https://creativecommons.org/licenses/by-sa/3.0/cn/', target: '_blank' },
                                '\u77E5\u8BC6\u5171\u4EAB\u7F72\u540D-\u76F8\u540C\u65B9\u5F0F\u5171\u4EAB 3.0 \u4E2D\u56FD\u5927\u9646\u8BB8\u53EF\u534F\u8BAE'
                            ),
                            ' \u8FDB\u884C\u8BB8\u53EF'
                        )
                    ),
                    React.createElement('div', { className: 'placeholder' }),
                    React.createElement(
                        'div',
                        { className: 'foot-about' },
                        React.createElement(
                            'div',
                            { className: 'about-gp' },
                            React.createElement(
                                'div',
                                { className: 'about-title' },
                                '\u8054\u7CFB\u4F5C\u8005'
                            ),
                            React.createElement(
                                'ul',
                                null,
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement('img', { src: '/images/icon/wechat.png', alt: '' })
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement('img', { src: '/images/icon/weibo.png', alt: '' })
                                ),
                                React.createElement(
                                    'li',
                                    null,
                                    React.createElement('img', { src: '/images/icon/github.png', alt: '' })
                                )
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'about-gp' },
                            React.createElement(
                                'div',
                                { className: 'about-title' },
                                '\u5173\u4E8E\u672C\u7AD9'
                            ),
                            React.createElement(
                                'a',
                                { href: '' },
                                React.createElement('img', { className: 'aliyun', src: '/images/aliyun.png', alt: '' })
                            )
                        )
                    )
                ),
                React.createElement(
                    'p',
                    { className: 'logo-fff' },
                    React.createElement('img', { src: '/images/logo-fff.png', alt: '' })
                ),
                React.createElement(
                    'p',
                    { className: 'cpr' },
                    'Copyright \xA9 2011-2017 TitanBlog'
                ),
                React.createElement(
                    'p',
                    { style: { textAlign: "center" }, className: 'ICP' },
                    '\u4EACICP\u590711008151\u53F7'
                )
            );
        }
    });
    module.exports = P;
});