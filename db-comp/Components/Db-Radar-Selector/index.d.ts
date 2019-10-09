import * as React from 'react';
import './index.scss';
declare class Props {
    activeKey?: string;
    className?: string;
    style?: React.CSSProperties;
    data: {
        /** 指标名 */
        indexName: string;
        /** 指标值 */
        indexValue: string | number;
        /** 目标值 */
        targetValue: string | number;
    }[];
    handleTabClick?: (params?: any) => any;
}
declare class State {
    activeKey: string;
}
export default class RaderTabs extends React.Component<Props, State> {
    static defaultProps: Props;
    state: State;
    componentWillMount(): void;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: Props): void;
    componentWillUnmount(): void;
    handleProps: (props: Props) => void;
    onRadarLabelClick: (e: any) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map