import * as React from 'react';
import './index.scss';
interface IColumn<T> {
    /** 数据字段名 */
    dataIndex: string;
    /** 表头名，不配置将使用字段名 */
    title?: React.ReactNode;
    /** 是否忽略数据中没有该字段 */
    ignoreData?: boolean;
    /** render方法 */
    render?: (text: any, record: T, index: number) => React.ReactNode;
    filters?: {
        text: string;
        value: string;
    }[];
    onFilter?: (value: any, record: T) => boolean;
    filterMultiple?: boolean;
    filterDropdown?: React.ReactNode;
    sorter?: boolean | ((a: any, b: any) => number);
    colSpan?: number;
    width?: string | number;
    className?: string;
    fixed?: boolean | ('left' | 'right');
    filteredValue?: any[];
    sortOrder?: boolean | ('ascend' | 'descend');
}
declare class TableProps<T> {
    /** 容器类名 */
    className: string;
    /** 容器样式 */
    style: React.CSSProperties;
    /** antd表格其他属性 */
    restProps: def.ICommonObj;
    /** 表格数据 */
    dataSource: T[];
    /** column配置 */
    columns: IColumn<T>[];
    pagination: any;
    loading: boolean;
}
declare class TableState<T> {
    columns: any[];
    /** 表格数据 */
    dataSource: T[];
}
export default class DbTable<T> extends React.Component<TableProps<T>, TableState<T>> {
    static defaultProps: TableProps<unknown>;
    state: TableState<T>;
    componentDidMount(): void;
    componentWillReceiveProps(nextProps: TableProps<T>): void;
    handleData: (props: TableProps<T>) => void;
    handleColumn: (props: TableProps<T>) => void;
    render(): JSX.Element;
}
export {};
//# sourceMappingURL=index.d.ts.map