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
var Db_Util_1 = require("../Db-Util");
require("./index.scss");
var Props = /** @class */ (function () {
    function Props() {
        /** 必须是字符串 */
        this.children = '';
        /** 样式 */
        this.style = {};
        /** 类名 */
        this.className = '';
        /** 是否展示tooltip展示原始字符串 */
    }
    return Props;
}());
exports.Props = Props;
var State = /** @class */ (function () {
    function State() {
        this.children = '';
    }
    return State;
}());
var DbEllipsis = /** @class */ (function (_super) {
    __extends(DbEllipsis, _super);
    function DbEllipsis() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new State();
        _this.id = "db-ellipsis-" + Db_Util_1.getUID();
        _this.handleChildren = function (props) {
            var children = props.children;
            if (!_.isNil(props.length)) {
                children = props.children.slice(0, props.length) + '...';
            }
            _this.setState({ children: children });
        };
        _this.renderStyle = function () {
            if (!_.isNil(_this.props.lines) && _this.props.lines > 1) {
                var style = "\n        #" + _this.id + "{\n          display: -webkit-box;\n          -webkit-box-orient: vertical;\n          -webkit-line-clamp: " + _this.props.lines + ";\n          overflow: hidden;\n        }\n      ";
                return React.createElement("style", { dangerouslySetInnerHTML: { __html: style } });
            }
            else {
                return null;
            }
        };
        _this.renderContent = function () {
            return (React.createElement("div", { id: _this.id, className: "db-ellipsis " + _this.props.className + " " + (!_.isNil(_this.props.lines) && _this.props.lines === 1 ? 'line-one' : ''), style: _this.props.style },
                _this.renderStyle(),
                _this.state.children));
        };
        return _this;
    }
    DbEllipsis.prototype.componentDidMount = function () {
        this.handleChildren(this.props);
    };
    DbEllipsis.prototype.componentWillReceiveProps = function (nextProps) {
        this.handleChildren(nextProps);
    };
    DbEllipsis.prototype.render = function () {
        return React.createElement(React.Fragment, null, this.renderContent());
    };
    DbEllipsis.defaultProps = new Props();
    return DbEllipsis;
}(React.Component));
exports.default = DbEllipsis;
//# sourceMappingURL=index.js.map