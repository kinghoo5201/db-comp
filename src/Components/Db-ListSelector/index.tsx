import * as React from 'react';
import * as _ from 'lodash';
import { ListItem, CircleItem } from './Items';
import './index.scss';
// import { validate } from '@babel/types';

interface Color {
  /** 起点颜色 */
  from: string;
  /** 结尾颜色 */
  to: string;
  /** 线线变化角度值 */
  direction: string;
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
}

export class ListSelectorProps {
  /** default: list,可选 list/circle/radar 三种类型，radar类型适合三个及以上的选择项使用 */
  public type: string = 'list';
  /** 给组件增加类名 */
  public className?: string = '';
  /** activeKey,设置选中的项的对应标识，string类型, 没有配置则默认选中第一项 */
  public activeKey?: string = '';
  /** 选择项数据 */
  public data: SelectorItem[] = [];
  /** change事件 */
  public onChange: (val: string | number) => void;
  /** type='list',进度条背景颜色,若为字符串：单一颜色，为对象：则为渐变色; type='circle',圆形选择的背景颜色，为字符串，则为单一背景颜色，为数组，则以数组中的顺序渲染颜色 */
  public strokeColor?: string | Color;
  /** type='list' 对应的属性 */
  /** 是否显示当前进展值 */
  public isShowValue?: boolean;
  /** 是否显示目标值 */
  public isShowTarget?: boolean;
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
