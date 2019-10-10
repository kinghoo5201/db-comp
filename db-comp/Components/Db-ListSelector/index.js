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
/* eslint-disable prefer-template */
var React = require("react");
var _ = require("lodash");
var Items_1 = require("./Items");
require("./index.scss");
var ListSelectorProps = /** @class */ (function () {
    function ListSelectorProps() {
        /** default: list,可选 list/circle 两种类型，radar类型适合三个及以上的选择项使用 */
        this.type = 'list';
        /** 给组件增加类名 */
        this.className = '';
        /** activeKey,设置选中的项的对应标识，string类型, 没有配置则默认选中第一项 */
        this.activeKey = '';
        /** 选择项数据 */
        this.data = [];
    }
    return ListSelectorProps;
}());
exports.ListSelectorProps = ListSelectorProps;
var ListSelectorState = /** @class */ (function () {
    function ListSelectorState() {
        /** 存储当前选中的数据项的indexName */
        this.value = '';
    }
    return ListSelectorState;
}());
var ListSelector = /** @class */ (function (_super) {
    __extends(ListSelector, _super);
    function ListSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new ListSelectorState();
        _this.handleProps = function (props) {
            var value = _.get(props, 'activeKey')
                ? _.get(props, 'activeKey')
                : _.get(props, 'data[0].indexName');
            _this.setState({ value: value });
        };
        return _this;
    }
    ListSelector.prototype.componentDidMount = function () {
        this.handleProps(this.props);
    };
    ListSelector.prototype.componentWillReceiveProps = function (nextProps) {
        this.handleProps(nextProps);
    };
    ListSelector.prototype.render = function () {
        var _this = this;
        var _a = this.props, type = _a.type, className = _a.className, data = _a.data, onChange = _a.onChange, strokeColor = _a.strokeColor, isShowValue = _a.isShowValue, isShowTarget = _a.isShowTarget, radius = _a.radius, activeRadius = _a.activeRadius, activeWidth = _a.activeWidth, fontSize = _a.fontSize, activeFontSize = _a.activeFontSize, textColor = _a.textColor;
        return (React.createElement("div", { className: "db-" + type + "-selector " + className }, !_.isEmpty(data)
            ? data.map(function (item, index) {
                if (!_.isNil(item.name)) {
                    if (type === 'list') {
                        return (React.createElement(Items_1.ListItem, { key: index, activeKey: _this.state.value, data: item, isShowValue: _.isNil(isShowValue) && isShowValue !== null
                                ? true
                                : Boolean(isShowValue), isShowTarget: _.isNil(isShowTarget) && isShowTarget !== null
                                ? true
                                : Boolean(isShowTarget), strokeColor: strokeColor || '#7ceeff', onChange: function (val) {
                                if (val.name !== _this.state.value) {
                                    _this.setState({ value: val.name });
                                    onChange(val);
                                }
                            } }));
                    }
                    if (type === 'circle') {
                        var strokeColorCircle = strokeColor &&
                            ((_.isArray(strokeColor) && !_.isEmpty(strokeColor)) ||
                                _.isString(strokeColor))
                            ? strokeColor[index % strokeColor.length]
                            : '#7ceeff';
                        return (React.createElement(Items_1.CircleItem, { key: index, activeKey: _this.state.value, isLastCircle: index + 1 === data.length, data: item, onChange: function (val) {
                                if (val.name !== _this.state.value) {
                                    _this.setState({ value: val.name });
                                    onChange(val);
                                }
                            }, strokeColor: strokeColorCircle, radius: radius || 25, activeRadius: activeRadius || 30, activeWidth: activeWidth || 7, fontSize: fontSize || 18, activeFontSize: activeFontSize || 23, textColor: textColor || '#ffffff' }));
                    }
                }
            })
            : null));
    };
    ListSelector.defaultProps = new ListSelectorProps();
    return ListSelector;
}(React.Component));
exports.default = ListSelector;
//# sourceMappingURL=index.js.map