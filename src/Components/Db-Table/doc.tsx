import * as React from 'react';
import { Divider } from 'antd';
import Component from './index';

export default class TestDoc extends React.Component<any, any> {
  public state = {
    code: '',
    doc: '',
  };
  public componentDidMount() {
    fetch('/db-comp/src/Components/Db-Table/index.tsx')
      .then(res => res.text())
      .then(text => this.setState({ code: text }));
    fetch('/db-comp/src/Components/Db-Table/doc.tsx')
      .then(res => res.text())
      .then(text => this.setState({ doc: text }));
  }
  public render() {
    return (
      <div>
        <Component
          dataSource={[
            {
              title: 1,
              value: 2,
            },
          ]}
        />
        <Divider />
        <h3>db-table使用方法</h3>
        <pre>{this.state.doc}</pre>
        <Divider />
        <h3>db-table源代码</h3>
        <pre>{this.state.code}</pre>
      </div>
    );
  }
}
