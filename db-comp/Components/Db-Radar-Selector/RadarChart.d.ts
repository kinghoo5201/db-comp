import * as React from 'react';
declare class Props {
    title?: string;
    className?: string;
    style?: {
        [propName: string]: any;
    };
    size: {
        width: number;
        height: number;
    };
    data: object[];
    forceFit: boolean;
    scale?: {
        [propName: string]: any;
    };
    crood?: {
        [propName: string]: any;
    };
    axises?: {
        [props: string]: any;
    }[];
    tooltip?: boolean | {
        [propName: string]: any;
    };
    geom?: {
        position?: [] | string;
        color?: [] | string | ((params?: any) => any);
        size?: number;
    };
    lineGeom?: {
        position?: [] | string;
        color?: [] | string | ((params?: any) => any);
        size?: number;
    };
    pointGeom?: {
        position?: [] | string;
        color?: [] | string | ((params?: any) => any);
        size?: number;
    };
    legend?: any;
    active: string;
    onTooltipChange: (params?: any) => any;
}
export default class RadarTabs extends React.Component<Props, any> {
    static defaultProps: Props;
    onTooltipChange: (e: any) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=RadarChart.d.ts.map