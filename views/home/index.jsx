"use strict";
seajs.use(["react", 'react-dom', 'react-plu', 'selector'], function (React, ReactDOM, Plus, $) {
    var MenuBtn = Plus.MenuBtn;
    var PageHead = Plus.PageHead;
    var LikeButton = React.createClass({
        getInitialState: function () {
            var init = {
                liked: false,
                test: "sdf",
                nihao: "hello"
            };
            return init;
        },
        handleClick: function (event) {
            this.setState({liked: !this.state.liked});
        },
        render: function () {
            var text = this.state.liked ? 'like' : 'haven\'t liked';
            return (
                <p onClick={this.handleClick}>
                    You {text} this. Click to toggle.{this.state.nihao}
                </p>
            );
        }
    });
   /* ReactDOM.render(
        <LikeButton/>,
        document.querySelector('.page-foot')
    );*/
    ReactDOM.render(
        <PageHead/>,
        document.getElementById("header-box")
    );
    /*ReactDOM.render(
     <MenuBtn/>,
     $("#btn-menubox")[0]
     );*/

    var target = document.querySelector('.banner-box');
    document.addEventListener('scroll', function () {
        var pageY = document.body.scrollTop || document.documentElement.scrollTop;
        if (pageY > 540) {
            return;
        }
        var offset = pageY / 3;
        target.style.backgroundPosition = "center " + offset + "px";
    });
});