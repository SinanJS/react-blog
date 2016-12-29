"use strict";
seajs.use(["react", 'react-dom', 'react-plu', 'selector'], function (React, ReactDOM, Plus, $) {
    let MenuBtn = Plus.MenuBtn;
    let PageHead = Plus.PageHead;
    let LikeButton = React.createClass({
        getInitialState: function () {
            let init = {
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
            let text = this.state.liked ? 'like' : 'haven\'t liked';
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

    let target = document.querySelector('.page-banner');
    document.addEventListener('scroll', function () {
        let pageY = document.body.scrollTop || document.documentElement.scrollTop;
        if (pageY > 540) {
            return;
        }
        let offset = pageY / 3;
        target.style.backgroundPosition = "center " + offset + "px";
    });
});