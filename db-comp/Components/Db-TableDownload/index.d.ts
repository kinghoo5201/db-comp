import * as React from 'react';
export declare class Props {
    /** 容器类名 */
    className?: string;
    /** 容器样式 */
    style?: React.CSSProperties;
    /** 按钮类名 */
    btnClassName?: string;
    /** 按钮样式 */
    btnStyle?: React.CSSProperties;
    /** 按钮文案 */
    btnText?: string;
    /** 下载的文件名 */
    fileName?: string;
    /** 下载前操作 */
    preDownload?: () => void;
    /** 下载后操作 */
    afterDownload?: () => void;
}
declare class State {
}
export default class Table2Excel extends React.Component<Props, State> {
    static defaultProps: Props;
    state: State;
    static base64(s: any): string;
    static format(s: any, c: any): any;
    handleDownload: () => void;
    wrapper: HTMLDivElement;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map