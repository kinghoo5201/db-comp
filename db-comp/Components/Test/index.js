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
var TestProps = /** @class */ (function () {
    function TestProps() {
    }
    return TestProps;
}());
exports.TestProps = TestProps;
var TestState = /** @class */ (function () {
    function TestState() {
    }
    return TestState;
}());
var Test = /** @class */ (function (_super) {
    __extends(Test, _super);
    function Test() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = new TestState();
        return _this;
    }
    Test.prototype.render = function () {
        return React.createElement(React.Fragment, null, "this is test component ");
    };
    Test.defaultProps = new TestProps();
    return Test;
}(React.Component));
exports.default = Test;
//# sourceMappingURL=index.js.map