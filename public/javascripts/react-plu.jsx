"use strict";

define(function (require, exports, module) {
    var React = require('react');
    var ReactDOM = require('react-dom');
    var $ = require("selector");
    var P = {};

    P.MenuBtn = React.createClass({
        getInitialState: function () {
            return {
                display: false
            };
        },
        handleClick: function (e) {
            this.setState({
                display:!this.state.display
            });
        },
        render: function () {
            var display = this.state.display ? "block" : "none";
            var height = document.body.clientHeight + "px";
            console.log(this.props)
            return (
                <div>
                    <button className="btn btn-menu" onClick={this.handleClick}></button>
                    <div className="drop-ul" ref="dropUl" style={{display:display}}>
                        <ul>
                            {
                                this.props.list.map(function(item){
                                    return <li><a href={item.link} target="_blank">{item.title}</a></li>
                                })
                            }
                        </ul>
                    </div>
                    <div className="btn-bg" style={{height:height,display:display}} ref="btnBg" onClick={this.handleClick}></div>
                </div>
            );
        }
    });
    var MenuBtn = P.MenuBtn;
    P.PageHead = React.createClass({
        getDefaultProps:function(){
            var routes = {
                list: [
                    {title: "首页", link: "/index"},
                    {title: "博客", link: "/blog"},
                    {title: "随笔", link: "#"},
                    {title: "相册", link: "#"},
                    {title: "GitHub", link: "https://github.com/SinanJS/sinan-blog",phoneOnly:true}
                ]
            };
            return routes;
        },
        render: function () {
            return (
                <div className="page-head">
                    <div className="content-box head-box for-pc">
                        <div className="head-left">
                            <div className="head-img" style={{marginRight:"35px"}}>
                                <img src="/images/logo.png" alt="logo here" className="logo-img"/>
                            </div>
                            {
                                this.props.list.map(function (item) {
                                    if(!item.phoneOnly){
                                        return <div className="head-item"><a href={item.link} target="_target" className="link-item">{item.title}</a></div>
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
    module.exports = P;
});
