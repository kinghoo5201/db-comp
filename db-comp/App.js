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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable import/extensions */
var React = require("react");
var _ = require("lodash");
var antd_1 = require("antd");
var hljs = require("highlight.js");
var react_router_dom_1 = require("react-router-dom");
var utils_1 = require("./utils");
require("./App.scss");
var context = require.context('./Components', true, /doc\.tsx$/);
var componentDocs = context.keys();
var totalContext = require.context('./Components', true, /[^(doc)]\.((tsx)|(md)|(scss)|(ts)|(js))$/);
var totalContextKey = totalContext.keys();
var WrapProps = /** @class */ (function () {
    function WrapProps() {
    }
    return WrapProps;
}());
var WrapState = /** @class */ (function () {
    function WrapState() {
        this.files = [];
        this.doc = '';
        this.isDocShow = false;
        this.sourceCode = {};
        this.selectedSource = '';
    }
    return WrapState;
}());
var Wrapper = /** @class */ (function (_super) {
    __extends(Wrapper, _super);
    function Wrapper() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new WrapState();
        _this.handleSelectKeys = function (props) {
            var keys = [];
            totalContextKey.forEach(function (key) {
                if (_this.props.path === key.split('/')[1]) {
                    keys.push(key);
                }
            });
            _this.setState({ files: keys }, function () { return _this.handleData(props); });
        };
        _this.handleData = function (props) {
            fetch("/db-comp/src/Components/" + props.path + "/doc.tsx?random=" + Math.random())
                .then(function (res) { return res.text(); })
                .then(function (doc) { return _this.setState({ doc: doc }); });
            _this.state.files.forEach(function (file) {
                fetch("/db-comp/src/Components/" + file.replace(/^\.\//, '') + "?random=" + Math.random())
                    .then(function (res) { return res.text(); })
                    .then(function (text) {
                    var _a;
                    _this.setState({
                        sourceCode: __assign({}, _this.state.sourceCode, (_a = {}, _a[file] = text, _a)),
                    });
                });
            });
        };
        return _this;
    }
    Wrapper.prototype.componentDidMount = function () {
        this.handleSelectKeys(this.props);
    };
    Wrapper.prototype.componentWillReceiveProps = function (nextProps) {
        this.handleSelectKeys(nextProps);
    };
    Wrapper.prototype.render = function () {
        var _this = this;
        var urlObj = utils_1.urlParser();
        return (React.createElement(antd_1.Row, { className: "doc-page" },
            React.createElement(antd_1.Col, { span: 6, className: "left-panel" }, componentDocs.map(function (item) {
                var path = item.replace(/^\./, '').replace(/\.tsx$/, '');
                var text = item.split('/')[1];
                return (React.createElement(react_router_dom_1.Link, { key: path, to: path, className: "nav-link" + (urlObj.path === path ? ' active' : '') }, text));
            })),
            React.createElement(antd_1.Col, { span: 18, className: "right-panel" },
                React.createElement("div", { className: "code-box" },
                    React.createElement("div", { className: "code-box-demo" }, this.props.children),
                    React.createElement("div", { className: "code-box-actions" },
                        React.createElement(antd_1.Tag, { color: this.state.isDocShow ? '#2db7f5' : '', onClick: function () {
                                _this.setState({
                                    isDocShow: !_this.state.isDocShow,
                                });
                            }, style: { cursor: 'pointer' } },
                            "\u67E5\u770Bdemo\u4EE3\u7801",
                            React.createElement(antd_1.Icon, { type: "code", title: "\u5C55\u793Ademo\u6E90\u4EE3\u7801" }))),
                    React.createElement("div", { className: "highlight-wrapper " + (this.state.isDocShow ? 'active' : '') },
                        React.createElement("div", { className: "highlight" },
                            React.createElement("pre", null,
                                React.createElement("code", { className: "hljs", dangerouslySetInnerHTML: {
                                        __html: hljs.highlightAuto(this.state.doc).value,
                                    } })))),
                    React.createElement("div", { className: "code-box-actions" }, this.state.files.map(function (item) {
                        return (React.createElement(antd_1.Tag, { key: item, style: { cursor: 'pointer' }, color: _this.state.selectedSource === item ? '#2db7f5' : '', onClick: function () {
                                _this.setState({
                                    selectedSource: _this.state.selectedSource === item ? '' : item,
                                });
                            } },
                            "\u67E5\u770B",
                            item,
                            React.createElement(antd_1.Icon, { type: "code", title: "\u5C55\u793A" + item + "\u6E90\u4EE3\u7801" })));
                    })),
                    React.createElement("div", { className: "highlight-wrapper " + (this.state.selectedSource ? 'active' : '') },
                        React.createElement("div", { className: "highlight" },
                            React.createElement("pre", null,
                                React.createElement("code", { className: "hljs", dangerouslySetInnerHTML: {
                                        __html: hljs.highlightAuto(_.get(this.state.sourceCode, this.state.selectedSource, '')).value,
                                    } }))))))));
    };
    Wrapper.defaultProps = new WrapProps();
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
                    var Comp = function () { return (React.createElement(Wrapper, { path: item.split('/')[1] },
                        React.createElement(Component, null))); };
                    return React.createElement(react_router_dom_1.Route, { exact: true, key: path, path: path, component: Comp });
                }))));
    };
    return App;
}(React.Component));
exports.default = App;
//# sourceMappingURL=App.js.map