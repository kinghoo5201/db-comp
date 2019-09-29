import * as React from 'react';
import Component from './index';
import Table from '../Db-Table';

export default class Doc extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h3>右键组件</h3>
        <p>用于给table组件赋予右键功能</p>
        <Component
          items={[
            {
              id: 1,
              text: '菜单1',
            },
            {
              id: 2,
              text: '菜单2',
            },
          ]}
          onSelect={val => {
            window.console.log('点击啦：：', val);
          }}
        >
          <Table
            dataSource={[
              {
                title: 'title1',
                value: 2,
              },
              {
                title: 'title3',
                value: 2,
              },
              {
                title: 'titlekdkd',
                value: 4,
              },
            ]}
          />
        </Component>
      </div>
    );
  }
}
