/* eslint-disable prettier/prettier */
import * as React from 'react';
import * as _ from 'lodash';
import { Icon } from 'antd-mobile';
import './index.scss';

interface ListItem {
  /** 要显示的列名:实际值 */
  [props: string]: string | number;
}

export class FoldListProps {
  /** 初始显示的项数 */
  public initDataLength?: number = 5;
  /** 折叠组件的标题名称 */
  public title?: string = '';
  /** 折叠组件的数据 */
  public dataSource: ListItem[] = [];
  /** 每列要显示的键名 */
  // public colInfo?: string[] = [];
  /** 每列要渲染成的样式的处理方法 */
  public itemRender?: (val: ListItem) => {};
  /** 折叠面板的子元素 */
  public children?: React.ReactNode;
}

class FoldListState {
  /** 存储当前列表的展开或折叠的状态值 */
  public expand: boolean = false;
}

export default class List extends React.Component<
  FoldListProps,
  FoldListState
> {
  public state = new FoldListState();

  switch = () => {
    const { expand } = this.state;
    this.setState({
      expand: !expand,
    });
  };

  render() {
    const { expand } = this.state;
    const {
      initDataLength,
      title,
      dataSource,
      children,
      itemRender,
    } = this.props;
    let data: ListItem[] = [];
    if (expand) {
      data = dataSource;
    } else if (initDataLength) {
      data = dataSource.slice(0, initDataLength);
    } else {
      data = dataSource;
    }
    // const data = expand ? dataSource : initDataLength ? dataSource.slice(0, initDataLength) : dataSource;
    const canExpand = initDataLength
      ? initDataLength < dataSource.length
      : false;
    window.console.log('cxxx', expand, canExpand);
    return (
      <div className="bees-list">
        <div className="bees-list-content">
          {title && (
            <div className="bees-list-item-wrap bees-list-title">
              <div className="bees-list-item">{title}</div>
            </div>
          )}

          {children ||
            data.map((item, index) => {
              return itemRender ? (
                <div className="bees-list-item-wrap" key={index}>
                  <div className="bees-list-item">{itemRender(item)}</div>
                </div>
              ) : (
                <div className="bees-list-item-wrap" key={index}>
                  <div className="bees-list-item">
                    {_.get(item, `${title}`, '')}
                  </div>
                </div>
              );
            })}
        </div>

        {canExpand && (
          <div className="expand" onClick={this.switch}>
            {expand ? '折叠' : '展开'}
            <span style={{ position: 'relative' }}>
              <Icon
                type={expand ? 'up' : 'down'}
                size="xs"
                style={{ position: 'absolute', top: '.08rem', left: 0 }}
              />
            </span>
          </div>
        )}
      </div>
    );
  }
}
