/* eslint-disable */

/**
 * @author kinghoo
 * @description 为表格赋予右键菜单功能
 * @warn children不能有多个table
 */
import * as React from 'react';
import * as _ from 'lodash';
import { getUID } from '../Db-Util';
import {
  unstable_renderSubtreeIntoContainer,
  unmountComponentAtNode,
} from 'react-dom';
import './index.scss';

/** 右键菜单项 */
interface IRightItem {
  text: React.ReactNode;
  id: string | number;
  disabled?: boolean;
}
class ContextProps {
  /** 右键菜单数据 */
  public items: IRightItem[] = [];
  /** 选中事件 */
  public onSelect: (val: {
    value: IRightItem;
    clickInfo: {
      parent: HTMLElement | null;
      index: number | null;
    };
  }) => any;
}
class ContextState {}

class ContextMenu extends React.Component<ContextProps, ContextState> {
  public static defaultProps = new ContextProps();

  public componentDidMount() {
    window.document.documentElement.addEventListener(
      'click',
      this.handleBodyClick,
    );
  }

  public componentWillReceiveProps(nextProps: ContextProps) {
    if (JSON.stringify(nextProps.items) !== JSON.stringify(this.props.items)) {
      if (this.container && !this.container.querySelector('table')) {
        return;
      }
      this.handleContextMenuContainer();
      const Content = this.renderContextMenu;
      unstable_renderSubtreeIntoContainer(
        this,
        <Content position={this.position} />,
        this.contextContainer,
      );
    }
  }

  public componentWillUnmount() {
    window.document.documentElement.removeEventListener(
      'click',
      this.handleBodyClick,
    );
  }

  /** 容器dom */
  public container: any = null;

  /** 右键菜单容器 */
  public contextContainer: any = null;

  /** 右键定位 */
  public position = {
    x: 0,
    y: 0,
  };

  /** 记录右键点击位置信息 */
  public clickInfo = {
    parent: null,
    index: null,
  };

  /** 右键菜单内容容器id */
  public contextMenuContId = `context-menu-container-${getUID()}`;

  /** 监听body的click事件，当点击不是表格将关闭右键 */
  public handleBodyClick = e => {
    if (this.contextContainer && !this.contextContainer.contains(e.target)) {
      unmountComponentAtNode(this.contextContainer);
    }
  };

  /** 右键菜单点击 */
  public handleItemClick = item => {
    const result = {
      value: item,
      clickInfo: this.clickInfo,
    };
    this.props.onSelect && this.props.onSelect(result);
    /** 销毁右键 */
    unmountComponentAtNode(this.contextContainer);
  };

  /** 渲染右键菜单内容 */
  public renderContextMenu = props => {
    let contextInt = null;
    React.useEffect(() => {
      if (!contextInt) {
        return;
      }
      const { position } = props;
      const size = {
        width: contextInt.offsetWidth,
        height: contextInt.offsetHeight,
      };
      const win = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      const result = {
        x: null,
        y: null,
      };
      if (position.y + size.height > win.height) {
        result.y = position.y - size.height;
      }
      if (position.x + size.width > win.width) {
        result.x = position.x - size.width;
      }
      if (!_.isNil(result.x)) {
        contextInt.style.left = `${result.x}px`;
      }
      if (!_.isNil(result.y)) {
        contextInt.style.top = `${result.y}px`;
      }
    });
    return (
      <div
        ref={ref => (contextInt = ref)}
        className="contex-menu-inner"
        style={{ top: props.position.y, left: props.position.x }}
        onContextMenu={e => e.preventDefault()}
      >
        {!_.isEmpty(this.props.items) &&
          this.props.items.map(item => (
            <div
              className={`context-menu-item${item.disabled ? ' disabled' : ''}`}
              key={item.id}
              onClick={() => this.handleItemClick(item)}
            >
              {item.text}
            </div>
          ))}
      </div>
    );
  };

  public findParentNode = currentNode => {
    let parents = this.container.querySelectorAll('tr');
    parents = Array.prototype.filter.call(parents, item =>
      item.querySelector('td'),
    );
    if (!parents.length) {
      return null;
    }
    const result = {
      index: null,
      parent: null,
    };
    Array.prototype.forEach.call(parents, (parent, index) => {
      if (parent.contains(currentNode)) {
        result.index = index;
        result.parent = parent;
      }
    });
    return result;
  };

  /** 右键容器创建 */
  public handleContextMenuContainer = () => {
    this.contextContainer = window.document.querySelector(
      `#${this.contextMenuContId}`,
    );
    if (!this.contextContainer) {
      this.contextContainer = window.document.createElement('div');
      this.contextContainer.setAttribute('id', this.contextMenuContId);
      window.document.querySelector('body').appendChild(this.contextContainer);
    }
    unmountComponentAtNode(this.contextContainer);
  };

  /** 响应右键菜单事件 */
  public handleContextMenu = e => {
    if (this.container && !this.container.querySelector('table')) {
      /** 如果容器中没有table，不进行操作 */
      return;
    }
    e.preventDefault();
    if (!this.container.querySelector('table').contains(e.target)) {
      return;
    }
    const clickInfo = this.findParentNode(e.target);
    if (!clickInfo.parent) {
      return;
    }
    this.clickInfo = clickInfo;
    this.handleContextMenuContainer();
    const Content = this.renderContextMenu;
    this.position = {
      x: e.clientX,
      y: e.clientY,
    };
    unstable_renderSubtreeIntoContainer(
      this,
      <Content position={this.position} />,
      this.contextContainer,
    );
  };

  public render() {
    return (
      <div
        ref={node => (this.container = node)}
        onContextMenu={this.handleContextMenu}
      >
        {this.props.children}
      </div>
    );
  }
}

export default ContextMenu;
