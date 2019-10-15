import * as React from 'react';
import * as _ from 'lodash';
import Component from './index';

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
              isActive={true}
              type="success"
              content="cxxx"
              width={200}
              height={100}
              hasMask={true}
            ></Component>
          </div>
        </div>
      </div>
    );
  }
}
