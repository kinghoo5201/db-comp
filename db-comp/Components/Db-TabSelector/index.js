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
var TabProps = /** @class */ (function () {
    function TabProps() {
        this.className = '';
        this.style = {};
    }
    return TabProps;
}());
exports.TabProps = TabProps;
var TabState = /** @class */ (function () {
    function TabState() {
        this.value = '';
    }
    return TabState;
}());
var TabSelector = /** @class */ (function (_super) {
    __extends(TabSelector, _super);
    function TabSelector() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new TabState();
        _this.handleProps = function (props) {
            var value = _.isNil(props.defaultValue)
                ? _.get(props.items, '[0].value', '')
                : props.defaultValue;
            _this.setState({ value: value });
        };
        return _this;
    }
    TabSelector.prototype.componentDidMount = function () {
        this.handleProps(this.props);
    };
    TabSelector.prototype.componentWillReceiveProps = function (nextProps) {
        this.handleProps(nextProps);
    };
    TabSelector.prototype.render = function () {
        var _this = this;
        return (React.createElement("div", { className: "db-tabselector " + this.props.className, style: this.props.style }, this.props.items &&
            this.props.items.map(function (item) {
                return (React.createElement("span", { className: "tab-item " + (_this.state.value === item.value ? 'active' : ''), key: item.value, onClick: function () {
                        if (_this.state.value !== item.value) {
                            _this.setState({
                                value: item.value,
                            });
                            _this.props.onChange && _this.props.onChange(item.value);
                        }
                    } }, item.text));
            })));
    };
    TabSelector.defaultProps = new TabProps();
    return TabSelector;
}(React.Component));
exports.default = TabSelector;
//# sourceMappingURL=index.js.map