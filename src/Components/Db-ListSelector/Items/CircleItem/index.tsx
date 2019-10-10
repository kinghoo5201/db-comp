import * as React from 'react';
import * as _ from 'lodash';
import './index.scss';

interface SelectorItem {
  name: string;
}

class Props {
  /** 选中的项的名称 */
  activeKey = '';
  /** 该项的数据集合 */
  data: SelectorItem;
  /** 是否为最后一个 */
  isLastCircle? = false;
  /** 选项的更改事件 */
  onChange: (params?: any) => any = () => {};
  /** 圆形选择的背景颜色，为字符串，则为单一背景颜色，为数组，则以数组中的顺序循环渲染颜色 */
  public strokeColor?: string;
  /** 圆形的显示半径，默认25px */
  public radius?: number;
  /** 被选中项的显示半径，默认为未激活的1.2倍，可自行设置选中的半径长度 */
  public activeRadius?: number;
  /** 被选中项的高亮外边距，默认为6px */
  public activeWidth?: number;
  /** 选项的文字大小,默认 14px */
  public fontSize?: number;
  /** 被选中的选项文字大小,默认 14px */
  public activeFontSize?: number;
  /** 选项的文本颜色 */
  public textColor?: string;
}

export default class CircleItem extends React.Component<Props, any> {
  public static defaultprops = new Props();

  render() {
    const name: string = _.get(this.props, 'data.name', '');

    const isActive: boolean = this.props.activeKey === name;
    const {
      strokeColor,
      radius,
      activeRadius,
      activeWidth,
      fontSize,
      activeFontSize,
      textColor,
    } = this.props;
    return (
      <React.Fragment>
        <div
          className={isActive ? 'text-box-wrap active' : 'text-box-wrap'}
          style={
            isActive
              ? {
                  width: `${(activeRadius + activeWidth) * 2}px`,
                  height: `${(activeRadius + activeWidth) * 2}px`,
                  borderRadius: `${(activeRadius + activeWidth) * 1}px`,
                  fontSize: `${activeFontSize * 1}px`,
                  color: textColor,
                  backgroundColor: `${strokeColor}33`,
                }
              : {
                  width: `${radius * 2}px`,
                  height: `${radius * 2}px`,
                  borderRadius: `${radius * 1}px`,
                  fontSize: `${fontSize * 1}px`,
                  color: textColor,
                  backgroundColor: `${strokeColor}33`,
                }
          }
          onClick={() => {
            this.props.onChange(this.props.data);
          }}
        >
          <div
            className="text-box"
            style={
              isActive
                ? {
                    width: `${activeRadius * 2}px`,
                    height: `${activeRadius * 2}px`,
                    borderRadius: `${activeRadius * 1}px`,
                    lineHeight: `${activeRadius * 2}px`,
                    marginTop: `${-activeRadius * 1}px`,
                    marginLeft: `${-activeRadius * 1}px`,
                    background: strokeColor,
                  }
                : {
                    width: `${radius * 2}px`,
                    height: `${radius * 2}px`,
                    borderRadius: `${radius * 1}px`,
                    lineHeight: `${radius * 2}px`,
                    marginTop: `${-radius * 1}px`,
                    marginLeft: `${-radius * 1}px`,
                    background: strokeColor,
                  }
            }
          >
            {name.slice(0, 2)}
          </div>
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
