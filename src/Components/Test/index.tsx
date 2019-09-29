import * as React from 'react';

export class TestProps {
  public prop1: string;
}

class TestState {}

export default class Test extends React.Component<TestProps, TestState> {
  public static defaultProps = new TestProps();
  public state = new TestState();

  public render() {
    return <>this is test component </>;
  }
}
