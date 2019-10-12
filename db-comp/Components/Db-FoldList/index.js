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
var _ = require("lodash");
var antd_mobile_1 = require("antd-mobile");
require("./index.scss");
var FoldListProps = /** @class */ (function () {
    function FoldListProps() {
        /** 初始显示的项数 */
        this.initDataLength = 5;
        /** 折叠组件的标题名称 */
        this.title = '';
        /** 标题的位置 */
        this.justifyContentType = 'center';
        /** 折叠组件的数据 */
        this.dataSource = [];
        /** 要显示的 展示/折叠 的字体，默认 展开/折叠 */
        this.customExpandText = {
            expand: { text: '展开', icon: 'up' },
            fold: { text: '折叠', icon: 'down' },
        };
    }
    return FoldListProps;
}());
exports.FoldListProps = FoldListProps;
var FoldListState = /** @class */ (function () {
    function FoldListState() {
        /** 存储当前列表的展开或折叠的状态值 */
        this.expand = false;
    }
    return FoldListState;
}());
var List = /** @class */ (function (_super) {
    __extends(List, _super);
    function List() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new FoldListState();
        _this.switch = function () {
            var expand = _this.state.expand;
            _this.setState({
                expand: !expand,
            });
        };
        return _this;
    }
    List.prototype.render = function () {
        var expand = this.state.expand;
        var _a = this.props, initDataLength = _a.initDataLength, title = _a.title, dataSource = _a.dataSource, children = _a.children, itemRender = _a.itemRender, className = _a.className, customExpandText = _a.customExpandText, justifyContentType = _a.justifyContentType;
        var data = [];
        if (expand) {
            data = dataSource;
        }
        else if (initDataLength) {
            data = dataSource.slice(0, initDataLength);
        }
        else {
            data = dataSource;
        }
        var canExpand = initDataLength
            ? initDataLength < dataSource.length
            : false;
        return (React.createElement("div", { className: "fold-list " + (className || '') },
            React.createElement("div", { className: "fold-list-content" },
                title && (React.createElement("div", { className: "fold-list-item-wrap fold-list-title" },
                    React.createElement("div", { className: "fold-list-item", style: { justifyContent: justifyContentType || 'center' } },
                        React.createElement("span", null, title)))),
                children ||
                    data.map(function (item, index) {
                        return itemRender ? (React.createElement("div", { className: "fold-list-item-wrap", key: index },
                            React.createElement("div", { className: "fold-list-item" }, itemRender(item)))) : (React.createElement("div", { className: "fold-list-item-wrap", key: index },
                            React.createElement("div", { className: "fold-list-item" }, _.get(item, "" + title, ''))));
                    })),
            canExpand && (React.createElement("div", { className: "fold-list-expand", onClick: this.switch },
                React.createElement("span", { style: {
                        verticalAlign: 'text-bottom',
                    } }, expand
                    ? customExpandText && !_.isEmpty(customExpandText)
                        ? _.get(customExpandText, 'expand.text', '')
                        : '折叠'
                    : customExpandText && !_.isEmpty(customExpandText)
                        ? _.get(customExpandText, 'fold.text', '')
                        : '展开'),
                React.createElement("span", { style: { position: 'relative' } },
                    React.createElement(antd_mobile_1.Icon, { type: expand
                            ? customExpandText && !_.isEmpty(customExpandText)
                                ? _.get(customExpandText, 'expand.icon', '')
                                : 'up'
                            : customExpandText && !_.isEmpty(customExpandText)
                                ? _.get(customExpandText, 'fold.icon', '')
                                : 'down', size: "xs", style: { position: 'absolute', top: '.08rem', left: 0 } }))))));
    };
    return List;
}(React.Component));
exports.default = List;
//# sourceMappingURL=index.js.map