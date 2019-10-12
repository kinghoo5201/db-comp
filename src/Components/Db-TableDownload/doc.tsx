import * as React from 'react';
import Table from '../Db-Table';
import Component from './index';

export default class Doc extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h3>表格下载组件(只支持单个table)</h3>
        <p>赋能表格，使其拥有下载表格至excel的能力</p>
        <Component>
          <Table
            dataSource={[
              {
                时间: new Date().toLocaleString(),
                名称: '行一',
                值: 1,
                随机数: Math.random(),
              },
              {
                时间: new Date().toLocaleString(),
                名称: '行二',
                值: 2,
                随机数: Math.random(),
              },
              {
                时间: new Date().toLocaleString(),
                名称: '行三',
                值: 3,
                随机数: Math.random(),
              },
              {
                时间: new Date().toLocaleString(),
                名称: '行四',
                值: 4,
                随机数: Math.random(),
              },
            ]}
          />
        </Component>
      </div>
    );
  }
}
