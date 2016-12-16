"use strict";

define(function (require, exports, module) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var P = {};
    P.$ = function () {};
    P.MenuBtn = React.createClass({
        displayName: 'MenuBtn',

        handleClick: function handleClick(e) {
            console.log(this);
            var dropUl = this.refs.dropUl;
            console.log("dropUl", dropUl);
            if (!dropUl.style.display || dropUl.style.display == "none") {
                dropUl.style.display = "block";
            } else {
                dropUl.style.display = "none";
            }
        },
        render: function render() {
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
                )
            );
        }
    });
    module.exports = P;
});