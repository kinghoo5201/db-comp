import * as React from 'react';
import './index.scss';
interface SelectorItem {
    name: string;
}
declare class Props {
    /** 选中的项的名称 */
    activeKey: string;
    /** 该项的数据集合 */
    data: SelectorItem;
    /** 是否为最后一个 */
    isLastCircle?: boolean;
    /** 选项的更改事件 */
    onChange: (params?: any) => any;
    /** 圆形选择的背景颜色，为字符串，则为单一背景颜色，为数组，则以数组中的顺序循环渲染颜色 */
    strokeColor?: string;
    /** 圆形的显示半径，默认25px */
    radius?: number;
    /** 被选中项的显示半径，默认为未激活的1.2倍，可自行设置选中的半径长度 */
    activeRadius?: number;
    /** 被选中项的高亮外边距，默认为6px */
    activeWidth?: number;
    /** 选项的文字大小,默认 14px */
    fontSize?: number;
    /** 被选中的选项文字大小,默认 14px */
    activeFontSize?: number;
    /** 选项的文本颜色 */
    textColor?: string;
}
export default class CircleItem extends React.Component<Props, any> {
    static defaultprops: Props;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map