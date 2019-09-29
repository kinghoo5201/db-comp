import * as React from 'react';
import * as _ from 'lodash';
import './index.scss';

interface ITabItem {
  text: React.ReactNode;
  value: string | number;
}

export class TabProps {
  public className?: string = '';
  public style?: React.CSSProperties = {};
  /** tab项数据 */
  public items?: [ITabItem, ITabItem];
  /** change事件 */
  public onChange?: (val: string | number) => void;
  /** 选中项 */
  public defaultValue?: string | number;
}

class TabState {
  public value: string | number = '';
}

export default class TabSelector extends React.Component<TabProps, TabState> {
  public static defaultProps = new TabProps();
  public state = new TabState();

  public componentDidMount() {
    this.handleProps(this.props);
  }
  public componentWillReceiveProps(nextProps: TabProps) {
    this.handleProps(nextProps);
  }
  public handleProps = (props: TabProps) => {
    const value = _.isNil(props.defaultValue)
      ? _.get(props.items, '[0].value', '')
      : props.defaultValue;
    this.setState({ value });
  };

  public render() {
    return (
      <div
        className={`db-tabselector ${this.props.className}`}
        style={this.props.style}
      >
        {this.props.items &&
          this.props.items.map(item => {
            return (
              <span
                className={`tab-item ${
                  this.state.value === item.value ? 'active' : ''
                }`}
                key={item.value}
                onClick={() => {
                  if (this.state.value !== item.value) {
                    this.setState({
                      value: item.value,
                    });
                    this.props.onChange && this.props.onChange(item.value);
                  }
                }}
              >
                {item.text}
              </span>
            );
          })}
      </div>
    );
  }
}
