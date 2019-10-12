/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import * as React from 'react';
import * as _ from 'lodash';
import { Icon } from 'antd-mobile';
import './index.scss';

interface ListItem {
  /** 要显示的列名:实际值 */
  [props: string]: string | number;
}

interface TextAndIcon {
  text?: string;
  icon?: string;
}

interface ExpandText {
  expand: TextAndIcon;
  fold: TextAndIcon;
}

export class FoldListProps {
  /** 初始显示的项数 */
  public initDataLength?: number = 5;
  /** 折叠组件的标题名称 */
  public title?: string = '';
  /** 标题的位置 */
  public justifyContentType?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around' = 'center';
  /** 折叠组件的数据 */
  public dataSource?: ListItem[] = [];
  /** 每列要渲染成的样式的处理方法 */
  public itemRender?: (val: ListItem) => {};
  /** 折叠面板的子元素 */
  public children?: React.ReactNode;
  /** 组件自定义添加的类名 */
  public className?: string;
  /** 要显示的 展示/折叠 的字体，默认 展开/折叠 */
  public customExpandText?: ExpandText = {
    expand: { text: '展开', icon: 'up' },
    fold: { text: '折叠', icon: 'down' },
  };
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
      className,
      customExpandText,
      justifyContentType,
    } = this.props;
    let data: ListItem[] = [];
    if (expand) {
      data = dataSource;
    } else if (initDataLength) {
      data = dataSource.slice(0, initDataLength);
    } else {
      data = dataSource;
    }

    const canExpand = initDataLength
      ? initDataLength < dataSource.length
      : false;
    return (
      <div className={`fold-list ${className || ''}`}>
        <div className="fold-list-content">
          {title && (
            <div className="fold-list-item-wrap fold-list-title">
              <div
                className="fold-list-item"
                style={{ justifyContent: justifyContentType || 'center' }}
              >
                <span>{title}</span>
              </div>
            </div>
          )}

          {children ||
            data.map((item, index) => {
              return itemRender ? (
                <div className="fold-list-item-wrap" key={index}>
                  <div className="fold-list-item">{itemRender(item)}</div>
                </div>
              ) : (
                <div className="fold-list-item-wrap" key={index}>
                  <div className="fold-list-item">
                    {_.get(item, `${title}`, '')}
                  </div>
                </div>
              );
            })}
        </div>

        {canExpand && (
          <div className="fold-list-expand" onClick={this.switch}>
            <span
              style={{
                verticalAlign: 'text-bottom',
              }}
            >
              {expand
                ? customExpandText && !_.isEmpty(customExpandText)
                  ? _.get(customExpandText, 'expand.text', '')
                  : '折叠'
                : customExpandText && !_.isEmpty(customExpandText)
                ? _.get(customExpandText, 'fold.text', '')
                : '展开'}
            </span>
            <span style={{ position: 'relative' }}>
              <Icon
                type={
                  expand
                    ? customExpandText && !_.isEmpty(customExpandText)
                      ? _.get(customExpandText, 'expand.icon', '')
                      : 'up'
                    : customExpandText && !_.isEmpty(customExpandText)
                    ? _.get(customExpandText, 'fold.icon', '')
                    : 'down'
                }
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
