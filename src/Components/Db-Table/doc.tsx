import * as React from 'react';
import Component from './index';

export default class TestDoc extends React.Component<any, any> {
  public state = {
    code: '',
  };
  public componentDidMount() {
    fetch('/src/Components/Db-Table/index.tsx')
      .then(res => res.text())
      .then(text => this.setState({ code: text }));
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
        <hr />
        <h3>db-table源代码</h3>
        <pre>{this.state.code}</pre>
      </div>
    );
  }
}
