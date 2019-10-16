import * as React from 'react';
import Component from './index';
import * as _ from 'lodash';
import { Icon } from 'antd';

export default class Doc extends React.Component<any, any> {
  renderGuantongItem = (item: { [props: string]: string | number }) => {
    const name = _.get(item, '列1', '');
    const rate = _.get(item, '列2', '');

    return (
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '1.5rem',
        }}
      >
        <span style={{ position: 'absolute', left: '10px' }}>{name}</span>
        <span style={{ position: 'absolute', left: '100px' }}>{rate}</span>
      </div>
    );
  };
  public render() {
    return (
      <div>
        <div>
          <h3>列表折叠组件</h3>
          <p>列表选择组件，直接渲染组件内部子元素，这个不进行折叠</p>
          <div
            style={{
              width: '800px',
              height: '200px',
              border: '1px solid #ddd',
            }}
          >
            <Component
              className=""
              isActive
              type="success"
              content="cxxx"
            ></Component>
          </div>
          <div
            style={{
              width: '800px',
              height: '200px',
              border: '1px solid #ddd',
            }}
          >
            <Component
              className=""
              isActive={true}
              type="warn"
              content="cxxx"
              width={200}
              height={100}
              hasMask={true}
            ></Component>
          </div>
          <div
            style={{
              width: '800px',
              height: '200px',
              border: '1px solid #ddd',
            }}
          >
            <Component
              className=""
              isActive={true}
              type="error"
              content="cxxx"
              width={200}
              height={100}
              hasMask={true}
            ></Component>
          </div>
          <div
            style={{
              width: '800px',
              height: '200px',
              border: '1px solid #ddd',
            }}
          >
            <Component
              className=""
              isActive={true}
              type="info"
              content="cxxx"
              width={200}
              height={100}
              hasMask={true}
            ></Component>
          </div>
          <div
            style={{
              width: '800px',
              height: '200px',
              border: '1px solid #ddd',
            }}
          >
            <Component
              className=""
              isActive={true}
              type="loading"
              content="cxxx"
              width={200}
              height={100}
            ></Component>
          </div>
          <div
            style={{
              width: '800px',
              height: '200px',
              border: '1px solid #ddd',
            }}
          >
            <Component
              isActive={true}
              content={<Icon type="question-circle" />}
              width={200}
              height={100}
            ></Component>
          </div>
        </div>
      </div>
    );
  }
}
