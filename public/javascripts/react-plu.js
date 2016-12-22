"use strict";

define(function (require, exports, module) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var $ = require("selector");
    var P = {};

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
            console.log(this.props);
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
                                null,
                                React.createElement(
                                    'a',
                                    { href: item.link, target: '_blank' },
                                    item.title
                                )
                            );
                        })
                    )
                ),
                React.createElement('div', { className: 'btn-bg', style: { height: height, display: display }, ref: 'btnBg', onClick: this.handleClick })
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
                                    { className: 'head-item' },
                                    React.createElement(
                                        'a',
                                        { href: item.link, target: '_target', className: 'link-item' },
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
    module.exports = P;
});