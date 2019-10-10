import * as React from 'react';
import * as _ from 'lodash';
import './index.scss';

interface SelectorItem {
  name: string;
}

class Props {
  activeKey = '';

  data: SelectorItem;

  isLastCircle? = false;

  onChange: (params?: any) => any = () => {};
}

export default class CircleItem extends React.Component<Props, any> {
  public static defaultprops = new Props();

  render() {
    const name: string = _.get(this.props, 'data.name', '');

    const isActive: boolean = this.props.activeKey === name;

    return (
      <React.Fragment>
        <div
          className={isActive ? 'text-box-wrap active' : 'text-box-wrap'}
          onClick={() => {
            this.props.onChange(this.props.data);
          }}
        >
          <div className="text-box">{name.slice(0, 2)}</div>
        </div>
        {!this.props.isLastCircle ? (
          <div className="point-box">
            <span className="sm-point" />
            <span className="lg-point" />
            <span className="sm-point" />
          </div>
        ) : null}
      </React.Fragment>
    );
  }
}
