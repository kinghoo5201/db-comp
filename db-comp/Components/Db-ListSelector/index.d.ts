import * as React from 'react';
import './index.scss';
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
}
export declare class ListSelectorProps {
    /** default: list,可选 list/circle/radar 三种类型，radar类型适合三个及以上的选择项使用 */
    type: string;
    /** 给组件增加类名 */
    className?: string;
    /** activeKey,设置选中的项的对应标识，string类型, 没有配置则默认选中第一项 */
    activeKey?: string;
    /** 选择项数据 */
    data: SelectorItem[];
    /** change事件 */
    onChange: (val: string | number) => void;
    /** type='list',进度条背景颜色,若为字符串：单一颜色，为对象：则为渐变色; type='circle',圆形选择的背景颜色，为字符串，则为单一背景颜色，为数组，则以数组中的顺序渲染颜色 */
    strokeColor?: string | Color;
    /** type='list' 对应的属性 */
    /** 是否显示当前进展值 */
    isShowValue?: boolean;
    /** 是否显示目标值 */
    isShowTarget?: boolean;
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