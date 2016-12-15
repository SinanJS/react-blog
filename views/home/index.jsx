"use strict";

ReactDOM.render(
    <h1>Hello, world</h1>,
    document.querySelector('.page-body')
);
var MenuBtn = React.createClass({
    handleClick: function (e) {
        console.log(this);
        var dropUl = this.refs.dropUl;
        console.log("dropUl",dropUl)
        if(!dropUl.style.display || dropUl.style.display == "none"){
            dropUl.style.display = "block";
        }else {
            dropUl.style.display = "none";
        }
    },
    render: function () {

        return (
            <div>
                <button className="btn btn-menu" onClick={this.handleClick}></button>
                <div className="drop-ul" ref="dropUl" style={{display:"none"}}>
                    <ul>
                        <li>首页</li>
                        <li>相册</li>
                        <li>博客</li>
                        <li>随笔</li>
                        <li>GitHub</li>
                    </ul>
                </div>
            </div>
        );
    }
});
ReactDOM.render(
    <MenuBtn/>,
    document.querySelector("#btn-menubox")
);
var target = document.querySelector('.banner-box');
document.addEventListener('scroll', function () {
    var pageY = document.body.scrollTop || document.documentElement.scrollTop;
    var offset = pageY / 3;
    target.style.backgroundPosition = "center " + offset + "px";
});