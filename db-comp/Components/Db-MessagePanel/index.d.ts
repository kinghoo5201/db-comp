import * as React from 'react';
import './index.scss';
export declare class MessagePanelProps {
    /** 组件自定义添加的类名 */
    className?: string;
    /** 提示框是否显示 */
    isActive?: boolean;
    /** 提示类型，加载中、信息、成功、失败、自定义 */
    type?: 'loading' | 'info' | 'success' | 'warn' | 'error';
    /** 提示内容，字符串内容，或自定义元素 */
    content?: React.ReactNode;
    /** 提示框的宽度，默认宽度 480px */
    width?: number;
    /** 提示框的高度，默认为 56px */
    height?: number;
    /** 是否产生蒙层 */
    hasMask?: boolean;
}
declare class MessagePanelState {
    /** 存储当前列表的展开或折叠的状态值 */
    isShow: boolean;
}
export default class MessagePanel extends React.Component<MessagePanelProps, MessagePanelState> {
    state: MessagePanelState;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map