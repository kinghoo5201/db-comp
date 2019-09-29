import * as React from 'react';
import Component from './index';

export default class TestDoc extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <h3>表格组件</h3>
        <p>
          可以直接导入数据即可生成表格，也可以配置columns，具体查看index.tsx代码源码查看TableProps：
        </p>
        <Component
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
          columns={[
            {
              dataIndex: 'title',
              title: 'title',
            },
            {
              dataIndex: 'value',
              title: <b>值</b>,
            },
          ]}
        />
      </div>
    );
  }
}
