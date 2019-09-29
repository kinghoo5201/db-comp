import * as React from 'react';
import Component from './index';

export default class Doc extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h3>tab选择组件</h3>
        <p>tab项选择，只支持两项数据</p>
        <Component
          items={[
            {
              text: '选项一',
              value: 1,
            },
            {
              text: '选项二',
              value: 2,
            },
          ]}
          onChange={val => window.console.log('选中项：', val)}
        />
      </div>
    );
  }
}
