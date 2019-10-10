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
var Props = /** @class */ (function () {
    function Props() {
        /** 容器类名 */
        this.className = '';
        /** 容器样式 */
        this.style = {};
        /** 按钮类名 */
        this.btnClassName = '';
        /** 按钮样式 */
        this.btnStyle = {};
        /** 按钮文案 */
        this.btnText = 'Download';
        /** 下载的文件名 */
        this.fileName = 'download';
    }
    return Props;
}());
exports.Props = Props;
var State = /** @class */ (function () {
    function State() {
    }
    return State;
}());
var Table2Excel = /** @class */ (function (_super) {
    __extends(Table2Excel, _super);
    function Table2Excel() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new State();
        _this.handleDownload = function () {
            if (_.isNil(_this.props.children)) {
                window.console.warn("error::Table2Excel \u7EC4\u4EF6\u9700\u8981\u5305\u88F9table\uFF01");
                return;
            }
            if (!_this.wrapper) {
                // 组件未加载完毕
                return;
            }
            var table = _this.wrapper.querySelector('table');
            if (!table) {
                window.console.warn("error::Table2Excel children\u4E2D\u4E0D\u5B58\u5728table\uFF01");
                return;
            }
            _this.props.preDownload && _this.props.preDownload();
            var uri = 'data:application/vnd.ms-excel;base64,';
            var template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-mic' +
                'rosoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><meta cha' +
                'rset="UTF-8"><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:Exce' +
                'lWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/>' +
                '</x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></' +
                'xml><![endif]--></head><body>{table}</body></html>';
            var context = {
                worksheet: 'sheet1',
                table: table.outerHTML,
            };
            var a = document.createElement('a');
            a.download = (_this.props.fileName || 'download') + '.xls';
            a.innerHTML = 'download';
            a.href = uri + Table2Excel.base64(Table2Excel.format(template, context));
            a.click();
            a.remove();
            _this.props.afterDownload && _this.props.afterDownload();
        };
        return _this;
    }
    Table2Excel.base64 = function (s) {
        return window.btoa(unescape(encodeURIComponent(s)));
    };
    Table2Excel.format = function (s, c) {
        return s.replace(/{(\w+)}/g, function (m, p) { return c[p]; });
    };
    Table2Excel.prototype.render = function () {
        var _this = this;
        return (
        // 可以通过传入的className来freestyle按钮样式，比如hover显示等等。。。
        React.createElement("div", { className: "Table-to-excel", style: this.props.style, ref: function (node) {
                _this.wrapper = node;
            } },
            React.createElement("button", { className: this.props.btnClassName, style: this.props.btnStyle, onClick: this.handleDownload }, this.props.btnText),
            this.props.children));
    };
    Table2Excel.defaultProps = new Props();
    return Table2Excel;
}(React.Component));
exports.default = Table2Excel;
//# sourceMappingURL=index.js.map