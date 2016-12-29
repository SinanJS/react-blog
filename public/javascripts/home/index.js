"use strict";

seajs.use(["react", 'react-dom', 'react-plu', 'selector'], function (React, ReactDOM, Plus, $) {
    var MenuBtn = Plus.MenuBtn;
    var PageHead = Plus.PageHead;
    var LikeButton = React.createClass({
        displayName: "LikeButton",

        getInitialState: function getInitialState() {
            var init = {
                liked: false,
                test: "sdf",
                nihao: "hello"
            };
            return init;
        },
        handleClick: function handleClick(event) {
            this.setState({ liked: !this.state.liked });
        },
        render: function render() {
            var text = this.state.liked ? 'like' : 'haven\'t liked';
            return React.createElement(
                "p",
                { onClick: this.handleClick },
                "You ",
                text,
                " this. Click to toggle.",
                this.state.nihao
            );
        }
    });
    /* ReactDOM.render(
         <LikeButton/>,
         document.querySelector('.page-foot')
     );*/
    ReactDOM.render(React.createElement(PageHead, null), document.getElementById("header-box"));
    /*ReactDOM.render(
     <MenuBtn/>,
     $("#btn-menubox")[0]
     );*/

    var target = document.querySelector('.page-banner');
    document.addEventListener('scroll', function () {
        var pageY = document.body.scrollTop || document.documentElement.scrollTop;
        if (pageY > 540) {
            return;
        }
        var offset = pageY / 3;
        target.style.backgroundPosition = "center " + offset + "px";
    });
});