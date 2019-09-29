"use strict";
/* eslint-disable */
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
/**
 * @author kinghoo
 * @description 为表格赋予右键菜单功能
 * @warn children不能有多个table
 */
var React = require("react");
var _ = require("lodash");
var utils_1 = require("../../utils");
var react_dom_1 = require("react-dom");
require("./index.scss");
var ContextProps = /** @class */ (function () {
    function ContextProps() {
        /** 右键菜单数据 */
        this.items = [];
    }
    return ContextProps;
}());
var ContextState = /** @class */ (function () {
    function ContextState() {
    }
    return ContextState;
}());
var ContextMenu = /** @class */ (function (_super) {
    __extends(ContextMenu, _super);
    function ContextMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        /** 容器dom */
        _this.container = null;
        /** 右键菜单容器 */
        _this.contextContainer = null;
        /** 右键定位 */
        _this.position = {
            x: 0,
            y: 0,
        };
        /** 记录右键点击位置信息 */
        _this.clickInfo = {
            parent: null,
            index: null,
        };
        /** 右键菜单内容容器id */
        _this.contextMenuContId = "context-menu-container-" + utils_1.getUID();
        /** 监听body的click事件，当点击不是表格将关闭右键 */
        _this.handleBodyClick = function (e) {
            if (_this.contextContainer && !_this.contextContainer.contains(e.target)) {
                react_dom_1.unmountComponentAtNode(_this.contextContainer);
            }
        };
        /** 右键菜单点击 */
        _this.handleItemClick = function (item) {
            var result = {
                value: item,
                clickInfo: _this.clickInfo,
            };
            _this.props.onSelect && _this.props.onSelect(result);
            /** 销毁右键 */
            react_dom_1.unmountComponentAtNode(_this.contextContainer);
        };
        /** 渲染右键菜单内容 */
        _this.renderContextMenu = function (props) {
            var contextInt = null;
            React.useEffect(function () {
                if (!contextInt) {
                    return;
                }
                var position = props.position;
                var size = {
                    width: contextInt.offsetWidth,
                    height: contextInt.offsetHeight,
                };
                var win = {
                    width: window.innerWidth,
                    height: window.innerHeight,
                };
                var result = {
                    x: null,
                    y: null,
                };
                if (position.y + size.height > win.height) {
                    result.y = position.y - size.height;
                }
                if (position.x + size.width > win.width) {
                    result.x = position.x - size.width;
                }
                if (!_.isNil(result.x)) {
                    contextInt.style.left = result.x + "px";
                }
                if (!_.isNil(result.y)) {
                    contextInt.style.top = result.y + "px";
                }
            });
            return (React.createElement("div", { ref: function (ref) { return (contextInt = ref); }, className: "contex-menu-inner", style: { top: props.position.y, left: props.position.x }, onContextMenu: function (e) { return e.preventDefault(); } }, !_.isEmpty(_this.props.items) &&
                _this.props.items.map(function (item) { return (React.createElement("div", { className: "context-menu-item" + (item.disabled ? ' disabled' : ''), key: item.id, onClick: function () { return _this.handleItemClick(item); } }, item.text)); })));
        };
        _this.findParentNode = function (currentNode) {
            var parents = _this.container.querySelectorAll('tr');
            parents = Array.prototype.filter.call(parents, function (item) {
                return item.querySelector('td');
            });
            if (!parents.length) {
                return null;
            }
            var result = {
                index: null,
                parent: null,
            };
            Array.prototype.forEach.call(parents, function (parent, index) {
                if (parent.contains(currentNode)) {
                    result.index = index;
                    result.parent = parent;
                }
            });
            return result;
        };
        /** 右键容器创建 */
        _this.handleContextMenuContainer = function () {
            _this.contextContainer = window.document.querySelector("#" + _this.contextMenuContId);
            if (!_this.contextContainer) {
                _this.contextContainer = window.document.createElement('div');
                _this.contextContainer.setAttribute('id', _this.contextMenuContId);
                window.document.querySelector('body').appendChild(_this.contextContainer);
            }
            react_dom_1.unmountComponentAtNode(_this.contextContainer);
        };
        /** 响应右键菜单事件 */
        _this.handleContextMenu = function (e) {
            if (_this.container && !_this.container.querySelector('table')) {
                /** 如果容器中没有table，不进行操作 */
                return;
            }
            e.preventDefault();
            if (!_this.container.querySelector('table').contains(e.target)) {
                return;
            }
            var clickInfo = _this.findParentNode(e.target);
            if (!clickInfo.parent) {
                return;
            }
            _this.clickInfo = clickInfo;
            _this.handleContextMenuContainer();
            var Content = _this.renderContextMenu;
            _this.position = {
                x: e.clientX,
                y: e.clientY,
            };
            react_dom_1.unstable_renderSubtreeIntoContainer(_this, React.createElement(Content, { position: _this.position }), _this.contextContainer);
        };
        return _this;
    }
    ContextMenu.prototype.componentDidMount = function () {
        window.document.documentElement.addEventListener('click', this.handleBodyClick);
    };
    ContextMenu.prototype.componentWillReceiveProps = function (nextProps) {
        if (JSON.stringify(nextProps.items) !== JSON.stringify(this.props.items)) {
            if (this.container && !this.container.querySelector('table')) {
                return;
            }
            this.handleContextMenuContainer();
            var Content = this.renderContextMenu;
            react_dom_1.unstable_renderSubtreeIntoContainer(this, React.createElement(Content, { position: this.position }), this.contextContainer);
        }
    };
    ContextMenu.prototype.componentWillUnmount = function () {
        window.document.documentElement.removeEventListener('click', this.handleBodyClick);
    };
    ContextMenu.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { ref: function (node) { return (_this.container = node); }, onContextMenu: this.handleContextMenu }, this.props.children));
    };
    ContextMenu.defaultProps = new ContextProps();
    return ContextMenu;
}(React.Component));
exports.default = ContextMenu;
//# sourceMappingURL=index.js.map