import * as React from 'react';
import './index.scss';
interface SelectorItem {
    name: string;
}
declare class Props {
    activeKey: string;
    data: SelectorItem;
    isLastCircle?: boolean;
    onClick: (params?: any) => any;
}
export default class CircleItem extends React.Component<Props, any> {
    static defaultprops: Props;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map