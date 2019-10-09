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
require("./index.scss");
var Props = /** @class */ (function () {
    function Props() {
        /** 选中的选项名称 */
        this.activeKey = '';
        /** 选项的点击事件 */
        this.onClick = function () { };
    }
    return Props;
}());
var ListItem = /** @class */ (function (_super) {
    __extends(ListItem, _super);
    function ListItem() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.showValidProgress = function (islinesFlag, isActive, value, unit, targetValue, isShowValue) {
            return (React.createElement("div", { className: "progress-wrap", style: { marginBottom: islinesFlag ? '8px' : 0 } },
                React.createElement("div", { className: isActive ? 'index-value active' : 'index-value' }, isShowValue ? parseFloat(String(value)) + unit : '\xa0'),
                React.createElement("div", { className: "progress" },
                    React.createElement("div", { className: "real-pregress", style: {
                            width: ((parseFloat(String(value)) / parseFloat(String(targetValue))) *
                                100 >
                                100
                                ? 100
                                : (parseFloat(String(value)) /
                                    parseFloat(String(targetValue))) *
                                    100) + "%",
                        } }),
                    React.createElement("div", { className: "white-placeholds" },
                        React.createElement("div", { className: "spans-wrap" },
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null))))));
        };
        _this.showInvalidProgress = function (islinesFlag, isActive, value, unit, isShowValue) {
            return (React.createElement("div", { className: "progress-wrap", style: { marginBottom: islinesFlag ? '8px' : 0 } },
                React.createElement("div", { className: isActive ? 'index-value active' : 'index-value' }, isShowValue ? "" + (value ? value + unit : '\xa0') : '\xa0'),
                React.createElement("div", { className: "progress" },
                    React.createElement("div", { className: "white-placeholds" },
                        React.createElement("div", { className: "spans-wrap" },
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null),
                            React.createElement("span", null))))));
        };
        return _this;
    }
    ListItem.prototype.render = function () {
        var _this = this;
        var _a = this.props.data, name = _a.name, _b = _a.unit, unit = _b === void 0 ? '' : _b, value = _a.value, targetValue = _a.targetValue;
        var isActive = _.get(this.props, 'activeKey', '') === name;
        var islinesFlag = Math.ceil(name.length / 8) >= 2;
        var _c = this.props, isShowValue = _c.isShowValue, isShowTarget = _c.isShowTarget;
        return (React.createElement("div", { key: name, onClick: function () {
                _this.props.onClick(_this.props.data);
            }, className: isActive ? 'list-item list-item-active' : 'list-item' },
            React.createElement("div", { className: "label" },
                isActive && React.createElement("span", { className: "active-img" }),
                name),
            !_.isNaN(parseFloat(String(value))) &&
                !_.isNaN(parseFloat(String(targetValue)))
                ? this.showValidProgress(islinesFlag, isActive, value, unit, targetValue, isShowValue)
                : this.showInvalidProgress(islinesFlag, isActive, value, unit, isShowValue),
            React.createElement("div", { className: "target-proportion", style: { marginBottom: islinesFlag ? '8px' : 0, width: '64px' } }, isShowTarget
                ? "" + (targetValue ? "\u76EE\u6807" + targetValue + unit : '\xa0')
                : '\xa0')));
    };
    return ListItem;
}(React.Component));
exports.default = ListItem;
//# sourceMappingURL=index.js.map