"use strict";

define(function (require, exports, module) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var $ = require("selector");
    var P = {};
    var routes = {
        list: [{ title: "首页", link: "/index" }, { title: "博客", link: "/blog" }]
    };
    P.MenuBtn = React.createClass({
        displayName: 'MenuBtn',

        handleClick: function handleClick(e) {
            var dropUl = this.refs.dropUl;
            var btnBg = this.refs.btnBg;
            console.log(btnBg);
            if (!dropUl.style.display || dropUl.style.display == "none") {
                dropUl.style.display = "block";
                btnBg.style.display = "block";
            } else {
                dropUl.style.display = "none";
                btnBg.style.display = "none";
            }
        },
        bgClick: function bgClick() {
            var dropUl = this.refs.dropUl;
            var btnBg = this.refs.btnBg;
            dropUl.style.display = "none";
            btnBg.style.display = "none";
        },
        render: function render() {
            var height = {
                height: document.body.clientHeight + "px"
            };
            return React.createElement(
                'div',
                null,
                React.createElement('button', { className: 'btn btn-menu', onClick: this.handleClick }),
                React.createElement(
                    'div',
                    { className: 'drop-ul', ref: 'dropUl', style: { display: "none" } },
                    React.createElement(
                        'ul',
                        null,
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', target: '_blank' },
                                '\u9996\u9875'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', target: '_blank' },
                                '\u76F8\u518C'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', target: '_blank' },
                                '\u535A\u5BA2'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', target: '_blank' },
                                '\u968F\u7B14'
                            )
                        ),
                        React.createElement(
                            'li',
                            null,
                            React.createElement(
                                'a',
                                { href: '#', target: '_blank' },
                                'GitHub'
                            )
                        )
                    )
                ),
                React.createElement('div', { className: 'btn-bg', style: height, ref: 'btnBg', onClick: this.bgClick })
            );
        }
    });
    var MenuBtn = P.MenuBtn;
    P.PageHead = React.createClass({
        displayName: 'PageHead',

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
                            { className: 'head-img' },
                            React.createElement('img', { src: '/images/logo.png', alt: 'logo here', className: 'logo-img' })
                        ),
                        React.createElement(
                            'div',
                            { style: { marginLeft: "35px" }, className: 'head-item' },
                            React.createElement(
                                'a',
                                { href: '#', target: '_blank', className: 'link-item' },
                                '\u9996\u9875'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'head-item' },
                            React.createElement(
                                'a',
                                { href: '#', target: '_blank', className: 'link-item' },
                                '\u535A\u5BA2'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'head-item' },
                            React.createElement(
                                'a',
                                { href: '#', target: '_blank', className: 'link-item' },
                                '\u76F8\u518C'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'head-item' },
                            React.createElement(
                                'a',
                                { href: '#', target: '_blank', className: 'link-item' },
                                '\u968F\u7B14'
                            )
                        )
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
                            React.createElement(MenuBtn, null)
                        )
                    )
                )
            );
        }
    });
    module.exports = P;
});