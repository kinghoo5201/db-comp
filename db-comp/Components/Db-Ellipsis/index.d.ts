import * as React from 'react';
import './index.scss';
export declare class Props {
    /** 必须是字符串 */
    children: string;
    /** 样式 */
    style?: React.CSSProperties;
    /** 类名 */
    className?: string;
    /** 超出后省略的字符串长度 */
    length?: number;
    /** 要溢出省略的行数 */
    lines?: number;
}
declare class State {
    children: string;
}
export default class DbEllipsis extends React.Component<Props, State> {
    static defaultProps: Props;
    state: State;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    id: string;
    handleChildren: (props: Props) => void;
    renderStyle: () => JSX.Element;
    renderContent: () => JSX.Element;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map