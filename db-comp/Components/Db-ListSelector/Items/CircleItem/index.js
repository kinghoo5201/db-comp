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
        this.activeKey = '';
        this.isLastCircle = false;
        this.onClick = function () { };
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
        return (React.createElement(React.Fragment, null,
            React.createElement("div", { className: isActive ? 'text-box-wrap active' : 'text-box-wrap', onClick: function () { return _this.props.onClick(_this.props.data); } },
                React.createElement("div", { className: "text-box" }, name.slice(0, 2))),
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