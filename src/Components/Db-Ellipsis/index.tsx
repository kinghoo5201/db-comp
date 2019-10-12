import * as React from 'react';
import * as _ from 'lodash';
import { getUID } from '../Db-Util';
import './index.scss';

export class Props {
  /** 必须是字符串 */
  public children: string = '';
  /** 样式 */
  public style?: React.CSSProperties = {};
  /** 类名 */
  public className?: string = '';
  /** 超出后省略的字符串长度 */
  public length?: number;
  /** 要溢出省略的行数 */
  public lines?: number;
  /** 是否展示tooltip展示原始字符串 */
}

class State {
  public children: string = '';
}

export default class DbEllipsis extends React.Component<Props, State> {
  public static defaultProps = new Props();
  public state = new State();

  public componentDidMount() {
    this.handleChildren(this.props);
  }

  public componentWillReceiveProps(nextProps: Props) {
    this.handleChildren(nextProps);
  }

  public id = `db-ellipsis-${getUID()}`;

  public handleChildren = (props: Props) => {
    let children = props.children;
    if (!_.isNil(props.length)) {
      children = props.children.slice(0, props.length) + '...';
    }
    this.setState({ children });
  };

  public renderStyle = () => {
    if (!_.isNil(this.props.lines) && this.props.lines > 1) {
      const style = `
        #${this.id}{
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: ${this.props.lines};
          overflow: hidden;
        }
      `;
      return <style dangerouslySetInnerHTML={{ __html: style }} />;
    } else {
      return null;
    }
  };

  public renderContent = () => {
    return (
      <div
        id={this.id}
        className={`db-ellipsis ${this.props.className} ${
          !_.isNil(this.props.lines) && this.props.lines === 1 ? 'line-one' : ''
        }`}
        style={this.props.style}
      >
        {this.renderStyle()}
        {this.state.children}
      </div>
    );
  };

  public render() {
    return <>{this.renderContent()}</>;
  }
}
