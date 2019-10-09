import * as React from 'react';
import './index.scss';
interface SelectorItem {
    /** 选项的名称 */
    name: string;
    /** 进度的单位 */
    unit?: string;
    /** 当前进度值,若不是有效值或没有传入，则不会显示进度条 */
    value?: string | number;
    /** 目标值,若不是有效值或没有传入，则不会显示进度条 */
    targetValue?: string | number;
}
declare class Props {
    /** 选中的选项名称 */
    activeKey?: string;
    /** 选项的数据集合 */
    data: SelectorItem;
    /** 是否显示当前进度值 */
    isShowValue: boolean;
    /** 是否显示目标值 */
    isShowTarget: boolean;
    /** 选项的点击事件 */
    onClick: (params?: any) => any;
}
export default class ListItem extends React.Component<Props, any> {
    private showValidProgress;
    private showInvalidProgress;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map