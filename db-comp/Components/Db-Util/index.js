"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// import * as React from 'react';
var _ = require("lodash");
/**
 * 解析当前地址，分析出路由路径和search字段
 * @param url 地址(hash)
 * */
function urlParser(url) {
    if (url === void 0) { url = decodeURIComponent(window.location.href); }
    var result = {};
    result.path = _.get(url.split('#'), '[1]', '').split('?')[0];
    result.search = url.split('?')[1] || '';
    result.pathDir = result.path.split('/').slice(1);
    if (result.search) {
        result.params = {};
        var querys = result.search.split('&');
        querys.forEach(function (query) {
            var item = query.split('=');
            result.params[item[0]] = item[1];
        });
    }
    return result;
}
exports.urlParser = urlParser;
/** 获取唯一值 */
function getUID() {
    // 获取唯一值
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        // eslint-disable-next-line no-bitwise
        var r = (Math.random() * 16) | 0;
        // eslint-disable-next-line no-bitwise
        var v = c === 'x' ? r : (r & 0x3) | 0x8;
        return v.toString(16);
    });
}
exports.getUID = getUID;
/** 从数组中取下一项 */
function getNextItem() {
    return function (arr) {
        var index = -1;
        return function () {
            index += 1;
            if (index >= arr.length) {
                index = 0;
            }
            return arr[index];
        };
    };
}
exports.getNextItem = getNextItem;
exports.default = {
    urlParser: urlParser,
    getUID: getUID,
    getNextItem: getNextItem,
};
//# sourceMappingURL=index.js.map