"use strict";

ReactDOM.render(React.createElement(
    "h1",
    null,
    "Hello, world"
), document.querySelector('.page-body'));
var MenuBtn = React.createClass({
    displayName: "MenuBtn",

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
            "div",
            null,
            React.createElement("button", { className: "btn btn-menu", onClick: this.handleClick }),
            React.createElement(
                "div",
                { className: "drop-ul", ref: "dropUl", style: { display: "none" } },
                React.createElement(
                    "ul",
                    null,
                    React.createElement(
                        "li",
                        null,
                        "\u9996\u9875"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "\u76F8\u518C"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "\u535A\u5BA2"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "\u968F\u7B14"
                    ),
                    React.createElement(
                        "li",
                        null,
                        "GitHub"
                    )
                )
            )
        );
    }
});
ReactDOM.render(React.createElement(MenuBtn, null), document.querySelector("#btn-menubox"));
var target = document.querySelector('.banner-box');
document.addEventListener('scroll', function () {
    var pageY = document.body.scrollTop || document.documentElement.scrollTop;
    var offset = pageY / 3;
    target.style.backgroundPosition = "center " + offset + "px";
});