"use strict";

define(function (require, exports, module) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var $ = require("selector");
    var P = {};
    var routes = {
        list:[
            { title:"首页",link:"/index"},
            { title:"博客",link:"/blog"},
        ]
    };
    P.MenuBtn = React.createClass({
        handleClick: function (e) {
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
        bgClick: function () {
            var dropUl = this.refs.dropUl;
            var btnBg = this.refs.btnBg;
            dropUl.style.display = "none";
            btnBg.style.display = "none";
        },
        render: function () {
            var height = {
                height:document.body.clientHeight+"px"
            };
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
                    <div className="btn-bg" style={height} ref="btnBg" onClick={this.bgClick}></div>
                </div>
            );
        }
    });
    var MenuBtn = P.MenuBtn;
    P.PageHead = React.createClass({
        render: function () {
            return (
                <div className="page-head">
                    <div className="content-box head-box for-pc">
                        <div className="head-left">
                            <div className="head-img">
                                <img src="/images/logo.png" alt="logo here" className="logo-img"/>
                            </div>
                            <div style={{marginLeft:"35px"}} className="head-item"><a href="#" target="_blank" className="link-item">首页</a></div>
                            <div className="head-item"><a href="#" target="_blank" className="link-item">博客</a></div>
                            <div className="head-item"><a href="#" target="_blank" className="link-item">相册</a></div>
                            <div className="head-item"><a href="#" target="_blank" className="link-item">随笔</a></div>
                        </div>
                        <div className="head-right">
                            <div className="head-item"><a href="https://github.com/SinanJS/sinan-blog" target="_blank" className="link-item">GitHub</a>
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
                                <MenuBtn />
                            </div>
                        </div>
                    </div>
                </div>
            );
        }
    });
    module.exports = P;
});
