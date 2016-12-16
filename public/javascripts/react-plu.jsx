"use strict";

define(function (require, exports, module) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var P = {};
    P.$ = function(){

    };
    P.MenuBtn = React.createClass({
        handleClick: function (e) {
            console.log(this);
            var dropUl = this.refs.dropUl;
            console.log("dropUl", dropUl)
            if (!dropUl.style.display || dropUl.style.display == "none") {
                dropUl.style.display = "block";
            } else {
                dropUl.style.display = "none";
            }
        },
        render: function () {
            return (
                <div>
                    <button className="btn btn-menu" onClick={this.handleClick}></button>
                    <div className="drop-ul" ref="dropUl" style={{display:"none"}}>
                        <ul>
                            <li><a href="#" target="_blank">首页</a></li>
                            <li><a href="#" target="_blank">相册</a></li>
                            <li><a href="#" target="_blank">博客</a></li>
                            <li><a href="#" target="_blank">随笔</a></li>
                            <li><a href="#" target="_blank">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            );
        }
    });
    module.exports = P;
});