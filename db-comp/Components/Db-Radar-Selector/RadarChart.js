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
var bizcharts_1 = require("bizcharts");
var _ = require("lodash");
var data_set_1 = require("@antv/data-set");
var DataView = data_set_1.default.DataView;
function transform(data) {
    var itemRes = [];
    _.isArray(data) &&
        data.forEach(function (item) {
            var indexName = item.indexName, indexValue = item.indexValue, targetValue = item.targetValue;
            itemRes.push({
                item: indexName,
                indexValue: parseFloat(indexValue),
                targetValue: parseFloat(targetValue),
            });
        });
    return itemRes;
}
var Props = /** @class */ (function () {
    function Props() {
        this.title = '';
        this.className = '';
        this.style = {};
        this.size = {
            width: 400,
            height: 400,
        };
        this.data = [];
        // 展示数据
        this.forceFit = false;
        // 是否自适应外部容器大小
        this.scale = {};
        this.crood = {
            radius: 1,
        };
        // 坐标系
        this.axises = [];
        // 坐标轴
        this.tooltip = false;
        // 提示框
        this.geom = {};
        // 图表
        this.lineGeom = {};
        // 图表
        this.pointGeom = {};
        // 图表
        this.legend = false;
        this.active = '';
        this.onTooltipChange = function () { };
    }
    return Props;
}());
// 雷达图
var RadarTabs = /** @class */ (function (_super) {
    __extends(RadarTabs, _super);
    function RadarTabs() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.onTooltipChange = function (e) {
            var _a = _this.props, onTooltipChange = _a.onTooltipChange, data = _a.data;
            var items = e.items;
            var title = items[0].title;
            data.map(function (item) {
                if (item.indexName === title) {
                    onTooltipChange && onTooltipChange(item);
                }
            });
        };
        return _this;
    }
    RadarTabs.prototype.render = function () {
        var _a = this.props, title = _a.title, style = _a.style, forceFit = _a.forceFit, size = _a.size, data = _a.data, scale = _a.scale, crood = _a.crood, axises = _a.axises, tooltip = _a.tooltip, legend = _a.legend, geom = _a.geom, lineGeom = _a.lineGeom, pointGeom = _a.pointGeom;
        var width = size.width, height = size.height;
        var containerStyle = !forceFit
            ? __assign({}, size, style) : {};
        var dv = new DataView().source(transform(data));
        dv.transform({
            type: 'fold',
            fields: ['indexValue'],
            key: 'key',
            value: 'score',
        });
        var styles = { fontSize: '12px' };
        return (React.createElement("div", { className: 'bees-radar', style: containerStyle },
            title && React.createElement("div", { className: "bees-radar-title" }, title),
            React.createElement(bizcharts_1.Chart, { width: width, height: height, padding: 20, scale: scale, data: dv, forceFit: forceFit, onTooltipChange: this.onTooltipChange, styles: styles },
                React.createElement(bizcharts_1.Coord, __assign({ type: "polar" }, crood)),
                axises &&
                    axises.map(function (axias) {
                        return React.createElement(bizcharts_1.Axis, __assign({ key: axias.name }, axias));
                    }),
                tooltip && React.createElement(bizcharts_1.Tooltip, __assign({}, tooltip, { hideMarkers: true })),
                legend && React.createElement(bizcharts_1.Legend, { name: "key", marker: "square", position: "top-right" }),
                (geom || lineGeom) && (React.createElement(bizcharts_1.Geom, __assign({ type: "line", position: 'item*score' }, (geom || lineGeom), { select: [
                        true,
                        {
                            mode: 'single',
                            cancelable: false,
                            animate: true,
                        },
                    ] }))),
                pointGeom && (React.createElement(bizcharts_1.Geom, { type: "point", position: "item*score", color: "key", shape: "circle", size: 1, style: {
                        stroke: '#fff',
                        lineWidth: 1,
                        fillOpacity: 1,
                    }, select: [
                        true,
                        {
                            mode: 'single',
                            cancelable: false,
                            animate: true,
                        },
                    ] })),
                React.createElement(bizcharts_1.Geom, { type: "area", position: "item*score" }))));
    };
    RadarTabs.defaultProps = new Props();
    return RadarTabs;
}(React.Component));
exports.default = RadarTabs;
//# sourceMappingURL=RadarChart.js.map