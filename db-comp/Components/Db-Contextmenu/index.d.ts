/**
 * @author kinghoo
 * @description 为表格赋予右键菜单功能
 * @warn children不能有多个table
 */
import * as React from 'react';
import './index.scss';
/** 右键菜单项 */
interface IRightItem {
    text: string;
    id: string | number;
    disabled?: boolean;
}
declare class ContextProps {
    /** 右键菜单数据 */
    items: IRightItem[];
    /** 选中事件 */
    onSelect: (val: {
        value: IRightItem;
        clickInfo: {
            parent: HTMLElement | null;
            index: number | null;
        };
    }) => any;
}
declare class ContextState {
}
declare class ContextMenu extends React.Component<ContextProps, ContextState> {
    static defaultProps: ContextProps;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: ContextProps): void;
    componentWillUnmount(): void;
    /** 容器dom */
    container: any;
    /** 右键菜单容器 */
    contextContainer: any;
    /** 右键定位 */
    position: {
        x: number;
        y: number;
    };
    /** 记录右键点击位置信息 */
    clickInfo: {
        parent: any;
        index: any;
    };
    /** 右键菜单内容容器id */
    contextMenuContId: string;
    /** 监听body的click事件，当点击不是表格将关闭右键 */
    handleBodyClick: (e: any) => void;
    /** 右键菜单点击 */
    handleItemClick: (item: any) => void;
    /** 渲染右键菜单内容 */
    renderContextMenu: (props: any) => JSX.Element;
    findParentNode: (currentNode: any) => {
        index: any;
        parent: any;
    };
    /** 右键容器创建 */
    handleContextMenuContainer: () => void;
    /** 响应右键菜单事件 */
    handleContextMenu: (e: any) => void;
    render(): JSX.Element;
}
export default ContextMenu;
//# sourceMappingURL=index.d.ts.map