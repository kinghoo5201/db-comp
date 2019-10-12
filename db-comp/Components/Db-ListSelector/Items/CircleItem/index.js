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
        /** 选中的项的名称 */
        this.activeKey = '';
        /** 是否为最后一个 */
        this.isLastCircle = false;
        /** 选项的更改事件 */
        this.onChange = function () { };
    }
    return Props;
}());
var CircleItem = /** @class */ (function (_super) {
    __extends(CircleItem, _super);
    function CircleItem() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CircleItem.prototype.render = function () {
        var _this = this;
        var name = _.get(this.props, 'data.name', '');
        var isActive = this.props.activeKey === name;
        var _a = this.props, strokeColor = _a.strokeColor, radius = _a.radius, activeRadius = _a.activeRadius, activeWidth = _a.activeWidth, fontSize = _a.fontSize, activeFontSize = _a.activeFontSize, textColor = _a.textColor;
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: isActive ? 'text-box-wrap active' : 'text-box-wrap', style: isActive
                    ? {
                        width: (activeRadius + activeWidth) * 2 + "px",
                        height: (activeRadius + activeWidth) * 2 + "px",
                        borderRadius: (activeRadius + activeWidth) * 1 + "px",
                        fontSize: activeFontSize * 1 + "px",
                        color: textColor,
                        backgroundColor: strokeColor + "33",
                    }
                    : {
                        width: radius * 2 + "px",
                        height: radius * 2 + "px",
                        borderRadius: radius * 1 + "px",
                        fontSize: fontSize * 1 + "px",
                        color: textColor,
                        backgroundColor: strokeColor + "33",
                    }, onClick: function () {
                    _this.props.onChange(_this.props.data);
                } },
                React.createElement("div", { className: "text-box", style: isActive
                        ? {
                            width: activeRadius * 2 + "px",
                            height: activeRadius * 2 + "px",
                            borderRadius: activeRadius * 1 + "px",
                            lineHeight: activeRadius * 2 + "px",
                            marginTop: -activeRadius * 1 + "px",
                            marginLeft: -activeRadius * 1 + "px",
                            background: strokeColor,
                        }
                        : {
                            width: radius * 2 + "px",
                            height: radius * 2 + "px",
                            borderRadius: radius * 1 + "px",
                            lineHeight: radius * 2 + "px",
                            marginTop: -radius * 1 + "px",
                            marginLeft: -radius * 1 + "px",
                            background: strokeColor,
                        } }, name.slice(0, 2))),
            !this.props.isLastCircle ? (React.createElement("div", { className: "point-box" },
                React.createElement("span", { className: "sm-point" }),
                React.createElement("span", { className: "lg-point" }),
                React.createElement("span", { className: "sm-point" }))) : null));
    };
    CircleItem.defaultprops = new Props();
    return CircleItem;
}(React.Component));
exports.default = CircleItem;
//# sourceMappingURL=index.js.map