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
var antd_1 = require("antd");
var Db_Util_1 = require("../Db-Util");
var idKey = Db_Util_1.getUID();
var TableProps = /** @class */ (function () {
    function TableProps() {
        /** 容器类名 */
        this.className = '';
        /** 容器样式 */
        this.style = {};
        /** antd表格其他属性 */
        this.restProps = {};
        /** column配置 */
        this.columns = [];
        this.pagination = false;
        this.loading = false;
    }
    return TableProps;
}());
var TableState = /** @class */ (function () {
    function TableState() {
        this.columns = [];
        /** 表格数据 */
        this.dataSource = [];
    }
    return TableState;
}());
var DbTable = /** @class */ (function (_super) {
    __extends(DbTable, _super);
    function DbTable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new TableState();
        _this.handleData = function (props) {
            var dataSource = _.cloneDeep(props.dataSource);
            dataSource.forEach(function (data) {
                /* eslint-disable-next-line no-param-reassign */
                data[idKey] = _.uniqueId();
            });
            _this.setState({ dataSource: dataSource }, function () { return _this.handleColumn(props); });
        };
        _this.handleColumn = function (props) {
            var dataSource = props.dataSource;
            var dataItem = _.get(dataSource, '[0]', {});
            var dataItemKeys = Object.keys(dataItem);
            var columns = [];
            if (_.isEmpty(props.columns)) {
                dataItemKeys.forEach(function (key) {
                    columns.push({
                        dataIndex: key,
                        key: key,
                        title: key,
                    });
                });
            }
            else {
                props.columns.forEach(function (item) {
                    if (_.isNil(dataItem[item.dataIndex]) && !item.ignoreData) {
                        // 如果数据中没有将不放在column中
                        return;
                    }
                    columns.push(__assign({}, item, { dataIndex: item.dataIndex, title: item.title || item.dataIndex, key: item.dataIndex }));
                });
            }
            _this.setState({ columns: columns });
        };
        return _this;
    }
    DbTable.prototype.componentDidMount = function () {
        this.handleData(this.props);
    };
    DbTable.prototype.componentWillReceiveProps = function (nextProps) {
        this.handleData(nextProps);
    };
    DbTable.prototype.render = function () {
        return (React.createElement("div", { className: "db-table " + this.props.className, style: this.props.style },
            React.createElement(antd_1.Table, __assign({ rowKey: idKey, columns: this.state.columns, dataSource: this.state.dataSource, pagination: this.props.pagination, loading: this.props.loading }, this.props.restProps))));
    };
    DbTable.defaultProps = new TableProps();
    return DbTable;
}(React.Component));
exports.default = DbTable;
//# sourceMappingURL=index.js.map