import * as React from 'react';
import './index.scss';
declare class Content {
    /** 标题 */
    title: {
        /** 标题前缀 */
        pre?: string;
        /** 标题内容 */
        text: string;
    };
    link?: {
        /** 普通链接|react-router提供的link */
        type?: 'normal' | 'spa';
        href: string;
        text: string;
        /** 自定义图标 */
        icon?: React.ReactNode;
    };
    content: React.ReactNode[];
}
export declare class Props {
    /** 容器样式 */
    style?: React.CSSProperties;
    /** 容器类名 */
    className?: string;
    /** 内容 */
    content: Content;
}
declare function DbNotice(props: Props): JSX.Element;
declare namespace DbNotice {
    var defaultProps: Props;
}
export default DbNotice;
//# sourceMappingURL=index.d.ts.map