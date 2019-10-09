"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var react_router_dom_1 = require("react-router-dom");
var antd_1 = require("antd");
require("./index.scss");
var Content = /** @class */ (function () {
    function Content() {
    }
    return Content;
}());
var Props = /** @class */ (function () {
    function Props() {
        /** 容器样式 */
        this.style = {};
        /** 容器类名 */
        this.className = '';
    }
    return Props;
}());
exports.Props = Props;
DbNotice.defaultProps = new Props();
function DbNotice(props) {
    if (_.isEmpty(props.content) ||
        _.isEmpty(props.content.title) ||
        _.isEmpty(props.content.content)) {
        window.console.warn("error:: content\u5C5E\u6027\uFF0C\u4EE5\u53CAcontent\u4E2D\u7684title\u3001content\u4E2D\u7684content\u4E0D\u53EF\u4E3A\u7A7A\uFF01\uFF01");
        return null;
    }
    return (React.createElement("div", { className: "db-top-notice " + props.className, style: props.style },
        React.createElement("div", { className: "db-top-notice-tit" },
            React.createElement("div", { className: "tit-cont" },
                !_.isNil(props.content.title.pre) && (React.createElement("span", { className: "tit-pre" }, props.content.title.pre)),
                props.content.title.text),
            (function () {
                if (!_.isEmpty(props.content.link)) {
                    if (props.content.link.type === 'normal' ||
                        !props.content.link.type) {
                        return (React.createElement("a", { href: props.content.link.href },
                            props.content.link.text,
                            _.isNil(props.content.link.icon) ? (React.createElement(antd_1.Icon, { type: "right" })) : (props.content.link.icon)));
                    }
                    else {
                        return (React.createElement(react_router_dom_1.Link, { to: props.content.link.href },
                            props.content.link.text,
                            _.isNil(props.content.link.icon) ? (React.createElement(antd_1.Icon, { type: "right" })) : (props.content.link.icon)));
                    }
                }
                else {
                    return null;
                }
            })()),
        React.createElement("div", { className: "db-top-notice-content" }, props.content.content.map(function (item, index) {
            return React.createElement("p", { key: index + "-" + _.uniqueId() }, item);
        }))));
}
exports.default = DbNotice;
//# sourceMappingURL=index.js.map