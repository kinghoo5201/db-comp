import * as React from 'react';
import Component from './index';

export default class Doc extends React.Component<any, any> {
  public render() {
    return (
      <div>
        <div>
          <h3>列表选择组件</h3>
          <p>列表选择组件，支持多项数据选项，以列表样式展示</p>
          <Component
            type="list"
            data={[
              {
                name: '1111',
                unit: '%',
                value: '98',
                targetValue: '100',
              },
              {
                name: '2222',
                unit: '%',
                value: '80',
                targetValue: '100',
              },
              {
                name: '333',
                // unit: '%',
                // value: '80',
                // targetValue: '100',
              },
              {
                name: '3333',
                unit: '%',
                value: '-',
                targetValue: 'cc',
              },
              {
                name: '4444',
                unit: '%',
                value: '80',
                targetValue: '100',
              },
              {
                name: '5555',
                unit: '%',
                value: '80',
                targetValue: '100',
              },
            ]}
            activeKey="1111"
            isShowValue={true}
            isShowTarget={true}
            // strokeColor={{
            //   from: '#7ceeff',
            //   to: '#188f00',
            // }}
            strokeColor={['#7ceeff', '#188f00']}
            onChange={val => window.console.log('选中项：', val)}
          />
        </div>
        <div style={{ marginTop: 30 }}>
          <h3>圆形横向选择组件</h3>
          <p>圆形横向选择组件，支持多项数据选项，横向展示</p>
          <Component
            type="circle"
            data={[
              {
                name: '1111',
              },
              {
                name: '222',
              },
              {
                name: '333',
              },
              {
                name: '444',
              },
              {
                name: '555',
              },
              {
                name: '66',
              },
              {
                name: '77',
              },
              {
                name: '88',
              },
              {
                name: '99',
              },
            ]}
            activeKey="333"
            strokeColor={['#7ceeff', '#188f00', '#00ff00']}
            radius={20}
            activeWidth={2}
            fontSize={10}
            onChange={val => window.console.log('选中项：', val)}
          />
        </div>
      </div>
    );
  }
}
