"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var _ = require("lodash");
var antd_1 = require("antd");
var react_router_dom_1 = require("react-router-dom");
var utils_1 = require("./utils");
require("./App.scss");
var context = require.context('./Components', true, /doc\.tsx/);
var componentDocs = context.keys();
var Wrapper = /** @class */ (function (_super) {
    __extends(Wrapper, _super);
    function Wrapper() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Wrapper.prototype.render = function () {
        var urlObj = utils_1.urlParser();
        return (React.createElement(antd_1.Row, { className: "doc-page" },
            React.createElement(antd_1.Col, { span: 6, className: "left-panel" }, componentDocs.map(function (item) {
                var path = item.replace(/^\./, '').replace(/\.tsx$/, '');
                var text = item.split('/')[1];
                return (React.createElement(react_router_dom_1.Link, { key: path, to: path, className: "nav-link" + (urlObj.path === path ? ' active' : '') }, text));
            })),
            React.createElement(antd_1.Col, { span: 18, className: "right-panel" }, this.props.children)));
    };
    return Wrapper;
}(React.Component));
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    App.prototype.render = function () {
        return (React.createElement(react_router_dom_1.HashRouter, null,
            React.createElement(react_router_dom_1.Switch, null,
                React.createElement(react_router_dom_1.Route, { exact: true, path: '/', render: function () {
                        return (React.createElement(react_router_dom_1.Redirect, { to: _.get(componentDocs, '[0]', '')
                                .replace(/^\./, '')
                                .replace(/\.tsx$/, '') }));
                    } }),
                componentDocs.map(function (item) {
                    var path = item.replace(/^\./, '').replace(/\.tsx$/, '');
                    var Component = context(item).default;
                    var Comp = function () { return (React.createElement(Wrapper, null,
                        React.createElement(Component, null))); };
                    return React.createElement(react_router_dom_1.Route, { exact: true, key: path, path: path, component: Comp });
                }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map