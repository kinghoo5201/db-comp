import * as React from 'react';
import * as _ from 'lodash';
import './index.scss';

interface SelectorItem {
  /** 选项的名称 */
  name: string;
  /** 进度的单位 */
  unit?: string;
  /** 当前进度值,若不是有效值或没有传入，则不会显示进度条 */
  value?: string | number;
  /** 目标值,若不是有效值或没有传入，则不会显示进度条 */
  targetValue?: string | number;
}

interface Color {
  /** 起点颜色 */
  from: string;
  /** 结尾颜色 */
  to: string;
  /** 线线变化角度值 */
  direction: string;
}

class Props {
  /** 选中的选项名称 */
  activeKey?: string = '';
  /** 选项的数据集合 */
  data: SelectorItem;
  /** 是否显示当前进度值 */
  isShowValue: boolean;
  /** 是否显示目标值 */
  isShowTarget: boolean;
  /** 进度条背景颜色 */
  strokeColor?: string | Color;
  /** 选项的点击事件 */
  onChange: (params?: any) => any = () => {};
}

export default class ListItem extends React.Component<Props, any> {
  private showValidProgress = (
    islinesFlag: boolean,
    isActive: boolean,
    value: string | number,
    unit: string,
    targetValue: string | number,
    isShowValue: boolean,
    strokeColor: string | Color,
  ) => {
    return (
      <div
        className="progress-wrap"
        style={{ marginBottom: islinesFlag ? '8px' : 0 }}
      >
        <div className={isActive ? 'index-value active' : 'index-value'}>
          {isShowValue ? parseFloat(String(value)) + unit : '\xa0'}
        </div>
        <div className="progress">
          <div
            className="real-pregress"
            style={{
              width: `${
                (parseFloat(String(value)) / parseFloat(String(targetValue))) *
                  100 >
                100
                  ? 100
                  : (parseFloat(String(value)) /
                      parseFloat(String(targetValue))) *
                    100
              }%`,
              background: _.isObject(strokeColor)
                ? `linear-gradient(${strokeColor.direction}, ${strokeColor.from},${strokeColor.to})`
                : strokeColor,
            }}
          />
          <div className="white-placeholds">
            <div className="spans-wrap">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    );
  };

  private showInvalidProgress = (
    islinesFlag: boolean,
    isActive: boolean,
    value: string | number,
    unit: string,
    isShowValue: boolean,
  ) => {
    return (
      <div
        className="progress-wrap"
        style={{ marginBottom: islinesFlag ? '8px' : 0 }}
      >
        <div className={isActive ? 'index-value active' : 'index-value'}>
          {isShowValue ? `${value ? value + unit : '\xa0'}` : '\xa0'}
        </div>
        <div className="progress">
          <div className="white-placeholds">
            <div className="spans-wrap">
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </div>
    );
  };

  public render() {
    const {
      name,
      unit = '',
      value,
      targetValue,
    }: SelectorItem = this.props.data;
    const isActive = _.get(this.props, 'activeKey', '') === name;
    const islinesFlag = Math.ceil(name.length / 8) >= 2;
    const { isShowValue, isShowTarget, strokeColor } = this.props;

    return (
      <div
        key={name}
        onClick={() => {
          this.props.onChange(this.props.data);
        }}
        className={isActive ? 'list-item list-item-active' : 'list-item'}
      >
        <div className="label">
          {isActive && <span className="active-img" />}
          {name}
        </div>
        {!_.isNaN(parseFloat(String(value))) &&
        !_.isNaN(parseFloat(String(targetValue)))
          ? this.showValidProgress(
              islinesFlag,
              isActive,
              value,
              unit,
              targetValue,
              isShowValue,
              strokeColor,
            )
          : this.showInvalidProgress(
              islinesFlag,
              isActive,
              value,
              unit,
              isShowValue,
            )}
        <div
          className="target-proportion"
          style={{ marginBottom: islinesFlag ? '8px' : 0, width: '64px' }}
        >
          {isShowTarget
            ? `${targetValue ? `目标${targetValue}${unit}` : '\xa0'}`
            : '\xa0'}
        </div>
      </div>
    );
  }
}
