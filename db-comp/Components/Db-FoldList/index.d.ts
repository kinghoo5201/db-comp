import * as React from 'react';
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
export declare class FoldListProps {
    /** 初始显示的项数 */
    initDataLength?: number;
    /** 折叠组件的标题名称 */
    title?: string;
    /** 标题的位置 */
    justifyContentType?: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around';
    /** 折叠组件的数据 */
    dataSource?: ListItem[];
    /** 每列要渲染成的样式的处理方法 */
    itemRender?: (val: ListItem) => {};
    /** 折叠面板的子元素 */
    children?: React.ReactNode;
    /** 组件自定义添加的类名 */
    className?: string;
    /** 要显示的 展示/折叠 的字体，默认 展开/折叠 */
    customExpandText?: ExpandText;
}
declare class FoldListState {
    /** 存储当前列表的展开或折叠的状态值 */
    expand: boolean;
}
export default class List extends React.Component<FoldListProps, FoldListState> {
    state: FoldListState;
    switch: () => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map