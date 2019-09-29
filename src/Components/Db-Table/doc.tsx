import * as React from 'react';
import Component from './index';

export default class TestDoc extends React.Component<any, any> {
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
      </div>
    );
  }
}
