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
/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
var React = require("react");
var antd_1 = require("antd");
require("./index.scss");
var MessagePanelProps = /** @class */ (function () {
    function MessagePanelProps() {
        /** 组件自定义添加的类名 */
        this.className = '';
        /** 提示框是否显示 */
        this.isActive = true;
        /** 提示内容，字符串内容，或自定义元素 */
        this.content = '';
        /** 提示框的宽度，默认宽度 480px */
        this.width = 480;
        /** 提示框的高度，默认为 56px */
        this.height = 56;
        /** 是否产生蒙层 */
        this.hasMask = false;
    }
    return MessagePanelProps;
}());
exports.MessagePanelProps = MessagePanelProps;
var MessagePanelState = /** @class */ (function () {
    function MessagePanelState() {
        /** 存储当前列表的展开或折叠的状态值 */
        this.isShow = true;
    }
    return MessagePanelState;
}());
var MessagePanel = /** @class */ (function (_super) {
    __extends(MessagePanel, _super);
    function MessagePanel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new MessagePanelState();
        return _this;
    }
    MessagePanel.prototype.render = function () {
        var isShow = this.state.isShow;
        var _a = this.props, className = _a.className, isActive = _a.isActive, type = _a.type, content = _a.content, width = _a.width, height = _a.height, hasMask = _a.hasMask;
        var typeObj = {
            loading: 'loading',
            info: 'info-circle',
            success: 'check-circle',
            warn: 'exclamation-circle',
            error: 'close-circle',
        };
        var defaultWidth = 400;
        var defaultHeight = 56;
        return isActive && (type || content) ? (React.createElement("div", { className: 'message-panel' },
            hasMask && React.createElement("div", { className: "message-panel-mask" }),
            React.createElement("div", { className: "message-panel-content " + (className || ''), style: {
                    width: (width || defaultWidth) + "px",
                    height: (height || defaultHeight) + "px",
                    lineHeight: (height || defaultHeight) + "px",
                    textAlign: 'center',
                    top: "calc(50% - " + (height || defaultHeight) / 2 + "px)",
                    left: "calc(50% - " + (width || defaultWidth) / 2 + "px)",
                } },
                React.createElement("span", { className: "message-panel-content-type message-panel-content-" + type },
                    type && typeObj[type] && React.createElement(antd_1.Icon, { type: "" + typeObj[type] }),
                    React.createElement("span", null, content || ''))))) : null;
    };
    return MessagePanel;
}(React.Component));
exports.default = MessagePanel;
//# sourceMappingURL=index.js.map