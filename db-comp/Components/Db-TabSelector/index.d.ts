import * as React from 'react';
import './index.scss';
interface ITabItem {
    text: React.ReactNode;
    value: string | number;
}
export declare class TabProps {
    className?: string;
    style?: React.CSSProperties;
    /** tab项数据 */
    items?: [ITabItem, ITabItem];
    /** change事件 */
    onChange?: (val: string | number) => void;
    /** 选中项 */
    defaultValue?: string | number;
}
declare class TabState {
    value: string | number;
}
export default class TabSelector extends React.Component<TabProps, TabState> {
    static defaultProps: TabProps;
    state: TabState;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: TabProps): void;
    handleProps: (props: TabProps) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map