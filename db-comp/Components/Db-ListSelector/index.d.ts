import * as React from 'react';
import './index.scss';
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
export declare class ListSelectorProps {
    /** default: list,可选 list/circle 两种类型，radar类型适合三个及以上的选择项使用 */
    type: 'list' | 'circle';
    /** 给组件增加类名 */
    className?: string;
    /** activeKey,设置选中的项的对应标识，string类型, 没有配置则默认选中第一项 */
    activeKey?: string;
    /** 选择项数据 */
    data: SelectorItem[];
    /** change事件 */
    onChange: (val: string | number) => void;
    /** type='list',进度条背景颜色,若为字符串：单一颜色，为数组：则为渐变色，第一项为起点颜色，第二项为结尾颜色; type='circle',圆形选择的背景颜色，为字符串，则为单一背景颜色，为数组，则以数组中的顺序循环渲染颜色 */
    strokeColor?: string | string[];
    /** type='list' 对应的属性 */
    /** 是否显示当前进展值 */
    isShowValue?: boolean;
    /** 是否显示目标值 */
    isShowTarget?: boolean;
    /** type="circle 对应的属性" */
    /** 圆形的显示半径，默认25px */
    radius?: number;
    /** 被选中项的显示半径，默认为未激活的1.2倍，可自行设置选中的半径长度 */
    activeRadius?: number;
    /** 被选中项的高亮外边距，默认为6px */
    activeWidth?: number;
    /** 选项的文字大小,默认 14px */
    fontSize?: number;
    /** 选项的文字粗细 */
    fontWeight?: number | string;
    /** 被选中的选项文字大小,默认 14px */
    activeFontSize?: number;
    /** 选项的文本颜色 */
    textColor?: string;
}
declare class ListSelectorState {
    /** 存储当前选中的数据项的indexName */
    value: string;
}
export default class ListSelector extends React.Component<ListSelectorProps, ListSelectorState> {
    static defaultProps: ListSelectorProps;
    state: ListSelectorState;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: ListSelectorProps): void;
    handleProps: (props: ListSelectorProps) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map