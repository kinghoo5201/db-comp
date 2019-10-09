import * as React from 'react';
import * as _ from 'lodash';
import { Table } from 'antd';
import { getUID } from '../../utils';

const idKey: string = getUID();

interface IColumn<T> {
  /** 数据字段名 */
  dataIndex: string;
  /** 表头名，不配置将使用字段名 */
  title?: React.ReactNode;
  /** 是否忽略数据中没有该字段 */
  ignoreData?: boolean;
  /** render方法 */
  render?: (text: any, record: T, index: number) => React.ReactNode;
  filters?: { text: string; value: string }[];
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

class TableProps<T> {
  /** 容器类名 */
  public className: string = '';
  /** 容器样式 */
  public style: React.CSSProperties = {};
  /** antd表格其他属性 */
  public restProps: def.ICommonObj = {};
  /** 表格数据 */
  public dataSource: T[];
  /** column配置 */
  public columns: IColumn<T>[] = [];
  public pagination: any = false;
  public loading: boolean = false;
}

class TableState<T> {
  public columns: any[] = [];
  /** 表格数据 */
  public dataSource: T[] = [];
}

export default class DbTable<T> extends React.Component<
  TableProps<T>,
  TableState<T>
> {
  public static defaultProps = new TableProps();
  public state = new TableState<T>();

  public componentDidMount() {
    this.handleData(this.props);
  }
  public componentWillReceiveProps(nextProps: TableProps<T>) {
    this.handleData(nextProps);
  }

  public handleData = (props: TableProps<T>) => {
    const dataSource = _.cloneDeep(props.dataSource);
    dataSource.forEach((data: any) => {
      /* eslint-disable-next-line no-param-reassign */
      data[idKey] = _.uniqueId();
    });
    this.setState({ dataSource }, () => this.handleColumn(props));
  };

  public handleColumn = (props: TableProps<T>) => {
    const dataSource = props.dataSource;
    const dataItem: def.ICommonObj = _.get(dataSource, '[0]', {});
    const dataItemKeys: string[] = Object.keys(dataItem);
    const columns: any[] = [];
    if (_.isEmpty(props.columns)) {
      dataItemKeys.forEach(key => {
        columns.push({
          dataIndex: key,
          key,
          title: key,
        });
      });
    } else {
      props.columns.forEach(item => {
        if (_.isNil(dataItem[item.dataIndex]) && !item.ignoreData) {
          // 如果数据中没有将不放在column中
          return;
        }
        columns.push({
          ...item,
          dataIndex: item.dataIndex,
          title: item.title || item.dataIndex,
          key: item.dataIndex,
        });
      });
    }
    this.setState({ columns });
  };

  public render() {
    return (
      <div
        className={`db-table ${this.props.className}`}
        style={this.props.style}
      >
        <Table
          rowKey={idKey}
          columns={this.state.columns}
          dataSource={this.state.dataSource}
          pagination={this.props.pagination}
          loading={this.props.loading}
          {...this.props.restProps}
        />
      </div>
    );
  }
}
