/**
 * 解析当前地址，分析出路由路径和search字段
 * @param url 地址(hash)
 * */
export declare function urlParser(url?: string): {
    [props: string]: any;
};
/** 获取唯一值 */
export declare function getUID(): string;
/** 从数组中取下一项 */
export declare function getNextItem(): (arr: any[]) => () => any;
declare const _default: {
    urlParser: typeof urlParser;
    getUID: typeof getUID;
    getNextItem: typeof getNextItem;
};
export default _default;
//# sourceMappingURL=index.d.ts.map