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
var React = require("react");
var _ = require("lodash");
var RadarChart_1 = require("./RadarChart");
require("./index.scss");
var Props = /** @class */ (function () {
    function Props() {
        this.activeKey = '';
        this.className = '';
        this.style = {};
        this.data = [];
        this.handleTabClick = function () { };
    }
    return Props;
}());
var State = /** @class */ (function () {
    function State() {
        this.activeKey = '';
    }
    return State;
}());
var RaderTabs = /** @class */ (function (_super) {
    __extends(RaderTabs, _super);
    function RaderTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new State();
        _this.handleProps = function (props) {
            var activeKey = _.isNil(props.activeKey)
                ? _.get(props.data, '[0].indexName', '')
                : props.activeKey;
            _this.setState({ activeKey: activeKey });
        };
        _this.onRadarLabelClick = function (e) {
            var _a = _this.props, data = _a.data, handleTabClick = _a.handleTabClick;
            var activeKey = _this.state.activeKey;
            var _b = e.target, className = _b.className, innerText = _b.innerText;
            if (className === 'radar-label') {
                var indexName_1 = innerText.slice(0, innerText.lastIndexOf('（')).trim();
                if (indexName_1 !== activeKey) {
                    data.forEach(function (item) {
                        if (item.indexName === indexName_1) {
                            _this.setState({ activeKey: item.indexName }, function () {
                                handleTabClick && handleTabClick(item);
                            });
                        }
                    });
                }
            }
        };
        return _this;
    }
    RaderTabs.prototype.componentWillMount = function () {
        window.addEventListener('click', this.onRadarLabelClick);
        window.addEventListener('touch', this.onRadarLabelClick);
    };
    RaderTabs.prototype.componentDidMount = function () {
        this.handleProps(this.props);
    };
    RaderTabs.prototype.componentWillReceiveProps = function (nextProps) {
        this.handleProps(nextProps);
    };
    RaderTabs.prototype.componentWillUnmount = function () {
        window.removeEventListener('click', this.onRadarLabelClick);
        window.removeEventListener('touch', this.onRadarLabelClick);
    };
    RaderTabs.prototype.render = function () {
        var _a = this.props, data = _a.data, handleTabClick = _a.handleTabClick;
        var activeKey = this.state.activeKey;
        var scale = {
            score: {
                min: 0,
                max: 100,
            },
        };
        var crood = {
            radius: 0.6,
        };
        var axises = [
            {
                name: 'item',
                line: null,
                tickLine: null,
                grid: {
                    lineStyle: {
                        lineDash: null,
                    },
                    hideFirstLine: false,
                },
                label: {
                    htmlTemplate: function (text) {
                        var index = 0;
                        var itemObj = {};
                        data.some(function (item, idx) {
                            if (item.indexName === text) {
                                index = idx;
                                itemObj = item;
                                return true;
                            }
                        });
                        var len = data.length;
                        var width = '6.5rem';
                        var indexName = itemObj.indexName, indexValue = itemObj.indexValue, indexUnit = itemObj.indexUnit;
                        switch (len) {
                            case 4:
                                width = index % 2 !== 0 ? '5.4rem' : '12rem';
                                break;
                            default:
                        }
                        var isActive = activeKey === indexName;
                        return "\n            <span class='radar-label' style='display: inline-block; cursor: pointer; text-align: center;\n              width: " + width + "; " + (isActive ? 'font-weight: 600; color: #1890FF' : '') + "'>\n              " + indexName + "<br />\uFF08" + indexValue + "\uFF09</span>\n          ";
                    },
                },
            },
            {
                name: 'score',
                visible: true,
                line: null,
                tickLine: null,
                grid: {
                    type: 'polygon',
                    lineStyle: {
                        lineDash: null,
                    },
                    alternateColor: 'rgba(0, 0, 0, 0.04)',
                },
                label: null,
            },
        ];
        var geom = {
            color: 'rgba(24,144,255,1)',
            size: 2,
        };
        return (React.createElement("div", { className: "bees-m-card " + this.props.className, style: __assign({}, this.props.style) },
            React.createElement("div", { className: "quota-radar" },
                React.createElement(RadarChart_1.default, { size: { width: 344.64, height: 250 }, data: data, scale: scale, axises: axises, crood: crood, geom: geom, pointGeom: {}, active: activeKey, forceFit: true, onTooltipChange: handleTabClick }))));
    };
    RaderTabs.defaultProps = new Props();
    return RaderTabs;
}(React.Component));
exports.default = RaderTabs;
//# sourceMappingURL=index.js.map