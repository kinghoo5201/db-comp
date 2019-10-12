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
          <p>
            列表选择组件，支持多项数据选项，以列表样式展示，
            <b>其中，每一行的行内数据和样式的展现可由使用者自行定义</b>
          </p>
          <Component
            title="我是标题"
            initDataLength={5}
            dataSource={[
              {
                列1: '我是列1',
                列2: '我是列2',
              },
              {
                列1: '我是列1',
                列2: '我是列2',
              },
              {
                列1: '我是列1',
                列2: '我是列2',
              },
              {
                列1: '我是列1',
                列2: '我是列2',
              },
              {
                列1: '我是列1',
                列2: '我是列2',
              },
              {
                列1: '我是列1',
                列2: '我是列2',
              },
              {
                列1: '我是列1',
                列2: '我是列2',
              },
              {
                列1: '我是列1',
                列2: '我是列2',
              },
            ]}
            itemRender={this.renderGuantongItem}
            customExpandText={{
              expand: { text: 'expand', icon: 'left' },
              fold: { text: 'fold', icon: 'right' },
            }}
            justifyContentType="center"
          />
          <h3>列表折叠组件</h3>
          <p>列表选择组件，直接渲染组件内部子元素，这个不进行折叠</p>
          <Component title="我是标题">
            <div>我是组件的子元素</div>
          </Component>
        </div>
      </div>
    );
  }
}
