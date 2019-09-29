// import * as React from 'react';
import * as _ from 'lodash';

/**
 * 解析当前地址，分析出路由路径和search字段
 * @param url 地址(hash)
 * */
export function urlParser(url = decodeURIComponent(window.location.href)) {
  const result: { [props: string]: any } = {};
  result.path = _.get(url.split('#'), '[1]', '').split('?')[0];
  result.search = url.split('?')[1] || '';
  result.pathDir = result.path.split('/').slice(1);
  if (result.search) {
    result.params = {};
    const querys: string[] = result.search.split('&');
    querys.forEach(query => {
      const item = query.split('=');
      result.params[item[0]] = item[1];
    });
  }
  return result;
}

/** 获取唯一值 */
export function getUID() {
  // 获取唯一值
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
    // eslint-disable-next-line no-bitwise
    const r = (Math.random() * 16) | 0;
    // eslint-disable-next-line no-bitwise
    const v = c === 'x' ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}
