import * as React from 'react';

export class Props {
  public prop1: string;
}

class State {}

export default class App extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public render() {
    return <>this is test component </>;
  }
}
