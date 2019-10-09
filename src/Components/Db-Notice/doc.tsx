import * as React from 'react';
import Component from './index';

export default class Doc extends React.Component<any, any> {
  public render() {
    return (
      <>
        <h3>头部公告展示组件</h3>
        <p>用于展示移动端头部展示公告</p>
        <div
          style={{
            width: 500,
            padding: 16,
          }}
        >
          <Component
            content={{
              title: {
                pre: '前缀文案',
                text: '这个是标题哦',
              },
              link: {
                href: 'javascript:alert("你点击了哦！")',
                text: '查看更多',
              },
              content: [
                '1. 这里是段落1这里是段落1这里是段落1这里是段落1这里是段落1这里是段落1这里是段落1',
                <span key={2}>
                  2.
                  这里是段落2这里是段落2这里是段落2这里是段落2这里是段落2这里是段落2这里是段落2
                </span>,
              ],
            }}
          />
        </div>
      </>
    );
  }
}
