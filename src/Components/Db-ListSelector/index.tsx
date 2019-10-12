/* eslint-disable prefer-template */
import * as React from 'react';
import * as _ from 'lodash';
import { ListItem, CircleItem } from './Items';
import './index.scss';
// import { validate } from '@babel/types';

interface Color {
  /** 起点颜色 */
  from?: string;
  /** 结尾颜色 */
  to?: string;
  /** 线线变化角度值 */
  // direction: string;
}

interface SelectorItem {
  /** 选项名称 */
  name: string;
  /** 选项进度和目标的单位 */
  unit?: string;
  /** 选项的进度值 */
  value?: string | number;
  /** 选项的目标值 */
  targetValue?: string | number;
  /** type='circle' 对应的属性 */
  [propname: string]: any;
}

export class ListSelectorProps {
  /** default: list,可选 list/circle 两种类型，radar类型适合三个及以上的选择项使用 */
  public type: 'list' | 'circle' = 'list';
  /** 给组件增加类名 */
  public className?: string = '';
  /** activeKey,设置选中的项的对应标识，string类型, 没有配置则默认选中第一项 */
  public activeKey?: string = '';
  /** 选择项数据 */
  public data: SelectorItem[] = [];
  /** change事件 */
  public onChange: (val: string | number) => void;
  /** type='list',进度条背景颜色,若为字符串：单一颜色，为数组：则为渐变色，第一项为起点颜色，第二项为结尾颜色; type='circle',圆形选择的背景颜色，为字符串，则为单一背景颜色，为数组，则以数组中的顺序循环渲染颜色 */
  public strokeColor?: string | string[];
  /** type='list' 对应的属性 */
  /** 是否显示当前进展值 */
  public isShowValue?: boolean;
  /** 是否显示目标值 */
  public isShowTarget?: boolean;
  /** type="circle 对应的属性" */
  /** 圆形的显示半径，默认25px */
  public radius?: number;
  /** 被选中项的显示半径，默认为未激活的1.2倍，可自行设置选中的半径长度 */
  public activeRadius?: number;
  /** 被选中项的高亮外边距，默认为6px */
  public activeWidth?: number;
  /** 选项的文字大小,默认 14px */
  public fontSize?: number;
  /** 选项的文字粗细 */
  public fontWeight?: number | string;
  /** 被选中的选项文字大小,默认 14px */
  public activeFontSize?: number;
  /** 选项的文本颜色 */
  public textColor?: string;
}

class ListSelectorState {
  /** 存储当前选中的数据项的indexName */
  public value: string = '';
}

export default class ListSelector extends React.Component<
  ListSelectorProps,
  ListSelectorState
> {
  public static defaultProps = new ListSelectorProps();
  public state = new ListSelectorState();

  public componentDidMount() {
    this.handleProps(this.props);
  }
  public componentWillReceiveProps(nextProps: ListSelectorProps) {
    this.handleProps(nextProps);
  }
  public handleProps = (props: ListSelectorProps) => {
    const value = _.get(props, 'activeKey')
      ? _.get(props, 'activeKey')
      : _.get(props, 'data[0].indexName');
    this.setState({ value });
  };

  public render() {
    const {
      type,
      className,
      data,
      onChange,
      strokeColor,
      isShowValue,
      isShowTarget,
      radius,
      activeRadius,
      activeWidth,
      fontSize,
      activeFontSize,
      textColor,
    } = this.props;

    return (
      <div className={`db-${type}-selector ${className}`}>
        {!_.isEmpty(data)
          ? data.map((item: any, index) => {
              if (!_.isNil(item.name)) {
                if (type === 'list') {
                  return (
                    <ListItem
                      key={index}
                      activeKey={this.state.value}
                      data={item}
                      isShowValue={
                        _.isNil(isShowValue) && isShowValue !== null
                          ? true
                          : Boolean(isShowValue)
                      }
                      isShowTarget={
                        _.isNil(isShowTarget) && isShowTarget !== null
                          ? true
                          : Boolean(isShowTarget)
                      }
                      strokeColor={strokeColor || '#7ceeff'}
                      onChange={val => {
                        if (val.name !== this.state.value) {
                          this.setState({ value: val.name });
                          onChange(val);
                        }
                      }}
                    />
                  );
                }
                if (type === 'circle') {
                  const strokeColorCircle: string =
                    strokeColor &&
                    ((_.isArray(strokeColor) && !_.isEmpty(strokeColor)) ||
                      _.isString(strokeColor))
                      ? strokeColor[index % strokeColor.length]
                      : '#7ceeff';
                  return (
                    <CircleItem
                      key={index}
                      activeKey={this.state.value}
                      isLastCircle={index + 1 === data.length}
                      data={item}
                      onChange={val => {
                        if (val.name !== this.state.value) {
                          this.setState({ value: val.name });
                          onChange(val);
                        }
                      }}
                      strokeColor={strokeColorCircle}
                      radius={radius || 25}
                      activeRadius={activeRadius || 30}
                      activeWidth={activeWidth || 7}
                      fontSize={fontSize || 18}
                      activeFontSize={activeFontSize || 23}
                      textColor={textColor || '#ffffff'}
                    />
                  );
                }
              }
            })
          : null}
      </div>
    );
  }
}
