import * as React from 'react';
import Component from './index';

export default class Doc extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h3>雷达指标选择器</h3>
        <Component
          activeKey="标题1"
          data={[
            {
              indexName: '标题1',
              indexValue: 20,
              targetValue: 100,
            },
            {
              indexName: '标题2',
              indexValue: 80,
              targetValue: 100,
            },
            {
              indexName: '标题3',
              indexValue: 40,
              targetValue: 100,
            },
            {
              indexName: '标题4',
              indexValue: '40%',
              targetValue: '100%',
            },
          ]}
          handleTabClick={val => window.console.log('您点击了：：', val)}
        />
      </div>
    );
  }
}
