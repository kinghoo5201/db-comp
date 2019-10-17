/* eslint-disable prettier/prettier */
/* eslint-disable no-nested-ternary */
import * as React from 'react';
import * as _ from 'lodash';
import { Icon } from 'antd';
import './index.scss';

export class MessagePanelProps {
  /** 组件自定义添加的类名 */
  public className?: string = '';
  /** 提示框是否显示 */
  public isActive?: boolean = true;
  /** 提示类型，加载中、信息、成功、失败、自定义 */
  public type?: 'loading' | 'info' | 'success' | 'warn' | 'error';
  /** 提示内容，字符串内容，或自定义元素 */
  public content?: React.ReactNode = '';
  /** 提示框的宽度，默认宽度 480px */
  public width?: number = 480;
  /** 提示框的高度，默认为 56px */
  public height?: number = 56;
  /** 是否产生蒙层 */
  public hasMask?: boolean = false;
}

class MessagePanelState {
  /** 存储当前列表的展开或折叠的状态值 */
  public isShow: boolean = true;
}

export default class MessagePanel extends React.Component<
  MessagePanelProps,
  MessagePanelState
> {
  public state = new MessagePanelState();

  render() {
    const { isShow } = this.state;
    const {
      className,
      isActive,
      type,
      content,
      width,
      height,
      hasMask,
    } = this.props;

    const typeObj = {
      loading: 'loading',
      info: 'info-circle',
      success: 'check-circle',
      warn: 'exclamation-circle',
      error: 'close-circle',
    };

    const defaultWidth = 400;
    const defaultHeight = 56;

    return isActive && (type || content) ? (
      <div className={'message-panel'}>
        {hasMask && <div className="message-panel-mask"></div>}
        <div
          className={`message-panel-content ${className || ''}`}
          style={{
            width: `${width || defaultWidth}px`,
            height: `${height || defaultHeight}px`,
            lineHeight: `${height || defaultHeight}px`,
            textAlign: 'center',
            top: `calc(50% - ${(height || defaultHeight) / 2}px)`,
            left: `calc(50% - ${(width || defaultWidth) / 2}px)`,
          }}
        >
          <span
            className={`message-panel-content-type message-panel-content-${type}`}
          >
            {type && typeObj[type] && <Icon type={`${typeObj[type]}`} />}
            <span>{content || ''}</span>
          </span>
        </div>
      </div>
    ) : null;
  }
}
